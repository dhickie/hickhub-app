import express from 'express';
import bodyParser from 'body-parser';
import request from 'request';
import React from 'react';
import RegistrationWindowContainer from './frontend/containers/registration/registrationWindow';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { hickHubApp } from './frontend/reducers/root';
import { LoginState } from './frontend/reducers/loginReducers';
import { RegistrationState } from './frontend/reducers/registrationReducers';
import { LoginWindow } from './frontend/components/loginWindow';
import { access } from 'fs';

const port = 3100;
const refreshBuffer = 10000;

var clientId = process.env.API_CLIENT_ID;
var clientSecret = process.env.API_CLIENT_SECRET;

var accessToken = '';
var refreshToken = '';
var accessTokenLifetime = 0;

// Authenticate with the API
authenticateClient(function() {
    setupRefreshTimer(function() {
        setupServer();
    });
});

function setupRefreshTimer(callback) {
    // Setup the timer which periodically refreshes the access token
    if (accessTokenLifetime < refreshBuffer) {
        setInterval(refreshWorker, accessTokenLifetime);
    } else {
        setInterval(refreshWorker, accessTokenLifetime - refreshBuffer);
    }

    // Call the callback
    if (callback) {
        callback();
    }
}

function authenticateClient(callback) {
    // Call the API to get a new access token/refresh token pair
    var body = {
        grant_type: 'client_credentials',
        client_id: clientId,
        client_secret: clientSecret,
        scope: 'admin'
    };
    var options = {
        url: 'https://api.hickhub.com/oauth/token',
        method: 'POST',
        form: body
    };

    request(options, function(error, response, body) {
        if (error) {
            console.error('An error occured trying to authenticate with the API: ' + error);
        } else if (response.statusCode != 200) {
            console.error('API responded to request with a non-OK status code: ' + response.statusCode);
        } else {
            // Extract the access token and refresh token
            var resp = JSON.parse(body);
            accessToken = resp.access_token;
            refreshToken = resp.refresh_token;
            accessTokenLifetime = resp.expires_in * 1000;

            // Call the callback
            if (callback) {
                callback();
            }
        }
    });
}

function refreshWorker() {
    var body = {
        grant_type: 'refresh_token',
        client_id: clientId,
        client_secret: clientSecret,
        refresh_token: refreshToken
    };
    var options = {
        url: 'https://api.hickhub.com/oauth/token',
        method: 'POST',
        form: body
    };

    request(options, function(error, response, body) {
        if (error) {
            console.error('An error occured trying to refresh the access token: ' + error);
        } else if (response.statusCode != 200) {
            console.error('API responded to request with a non-OK status code: ' + response.statusCode);
        } else {
            var resp = JSON.parse(body);
            accessToken = resp.access_token;
            refreshToken = resp.refresh_token;
        }
    });
}

function setupServer() {
    var app = express();
    app.use(bodyParser.json());
    app.use('/static', express.static('./static'));
    app.use('/login', handleLogin);
    app.use('/register', handleRegister);

    app.post('/registration/emailcheck', handleEmailCheck);
    app.post('/registration/register', handleRegistrationRequest);

    app.listen(port);
}

function handleLogin(req, res) {
    // Create the initial state based on the the query parameters
    const initialState = {
        login: {
            loginState: LoginState.AWAITING_CREDS,
            email: '',
            password: '',
            error: '',
            clientId: req.query.client_id || '',
            scope: req.query.scope || '',
            redirectUri: req.query.redirect_uri || '',
            state: req.query.state || '',
            authCode: ''
        }
    };

    // Create a new store
    const store = createStore(hickHubApp, initialState);

    // Render the app as a string
    const html = renderToString(
        <Provider store={store}>
            <LoginWindow />
        </Provider>
    );

    // Get the initial state from the store
    const finalState = store.getState();

    // Send the rendered page back to the client
    res.send(renderFullPage(html, finalState));
}

function handleRegister(req, res) {
    // Create the initial empty registration state
    const initialState = {
        registration: {
            state: RegistrationState.AWAITING_EMAIL,
            email: '',
            password: '',
            repeatPassword: '',
            securityQuestion: '',
            securityAnswer: '',
            customSecurityQuestion: false,
            error: ''
        }
    };

    // Create a new store
    const store = createStore(hickHubApp, initialState);

    // Render the app as a string
    const html = renderToString(
        <Provider store={store}>
            <RegistrationWindowContainer />
        </Provider>
    );

    // Get the initial state from the store
    const finalState = store.getState();

    res.send(renderFullPage(html, finalState));
}

function handleEmailCheck(req, res) {
    // Get the email we want to check
    var email = req.body.email;

    // Call the HickHub API to check whether it's available
    var options = {
        url: encodeURI(`https://api.hickhub.com/registration/email/${email}/available`),
        method: 'GET',
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    };

    request(options, function(error, apiRes, body) {
        if (error || apiRes.statusCode != 200) {
            console.error(`An error occured checking whether the email was available: ${error}, status code: ${apiRes.statusCode}`);
            res.sendStatus(500);
        } else {
            res.json(body);
        }
    });
}

function handleRegistrationRequest(req, res) {
    // Call the HickHub API to register the user
    var body = {
        email: req.body.email,
        password: req.body.password,
        security_question: req.body.securityQuestion,
        security_answer: req.body.securityAnswer
    };
    var options = {
        url: 'https://api.hickhub.com/registration/user',
        method: 'POST',
        body: body,
        json: true,
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    };

    request(options, function(error, apiRes, body) {
        if (error || apiRes.statusCode != 200) {
            console.error(`An error occured registering the user: ${error}, status code: ${apiRes.statusCode}`);
            res.sendStatus(500);
        } else {
            res.json(body);
        }
    });
}

function renderFullPage(html, preloadedState) {
    return (
        `
        <html>
            <head>
                <title>HickHub - home automation made easy</title>
                <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
            </head>
            <body>
                <div id="root">${html}</div>
                <script>
                    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
                </script>
                <script src="/static/app.js" type="text/javascript"></script>
            </body>
        </html>
        `
    );
}