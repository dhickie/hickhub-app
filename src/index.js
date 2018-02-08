import express from 'express';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { loginWindow } from './frontend/reducers/loginReducers'
import { LoginState } from './frontend/reducers/loginReducers';
import { LoginWindow } from './frontend/components/loginWindow';

var app = express();
const port = 3000;

app.use('/static', express.static('./src/frontend/static'));
app.use('/login', handleLogin);

function handleLogin(req, res) {
    // Create the initial state based on the the query parameters
    const initialState = {
        loginState: LoginState.AWAITING_CREDS,
        email: '',
        password: '',
        error: '',
        clientId: req.query.client_id || '',
        scope: req.query.scope || '',
        redirectUri: req.query.redirect_uri || '',
        state: req.query.state || '',
        authCode: ''
    };

    // Create a new store
    const store = createStore(loginWindow, initialState);

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

app.listen(port);

