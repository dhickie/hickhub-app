import fetch from 'cross-fetch';

export const LOGIN_STARTED = 'LOGIN_STARTED';
export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const EMAIL_INPUT_CHANGED = 'EMAIL_INPUT_CHANGED';
export const PASSWORD_INPUT_CHANGED = 'PASSWORD_INPUT_CHANGED';

// Constants
const INTERNAL_ERROR_MESSAGE = 'An unknown error occured trying to log in. Please try again later.';
const INVALID_CLIENT = 'Attempting to log in from an unknown client.';
const INVALID_CREDS = 'This combination of email address and password is not valid.';

// Sync action creators

export function emailInputChanged(newValue) {
    return { type: EMAIL_INPUT_CHANGED, newValue };
};

export function passwordInputChanged(newValue) {
    return { type: PASSWORD_INPUT_CHANGED, newValue };
};

function loginStarted() {
    return { type: LOGIN_STARTED };
};

function loginSuccessful(authCode) {
    return { type: LOGIN_SUCCESSFUL, authCode };
};

function loginFailed(error) {
    return { type: LOGIN_FAILED, error };
};

// Async action creators

export function startLogin(email, password, clientId, scope, redirectUri) {
    return function(dispatch) {
        dispatch(loginStarted());

        var body = JSON.stringify({
            email: email,
            password: password,
            client_id: clientId,
            scope: scope,
            redirect_uri: redirectUri
        });
        var options = {
            method: 'POST',
            body: body
        };

        console.log(body);

        fetch(`https://api.hickhub.com/oauth/authorize`, options)
        .then(response => {
            console.log(response)
                // Figure out whether the call was successful
                if (response.status == 401) {
                    dispatch(loginFailed(INVALID_CREDS));
                } else if (response.status == 403) {
                    dispatch(loginFailed(INVALID_CLIENT));
                } else if (response.status != 200) {
                    dispatch(loginFailed(INTERNAL_ERROR_MESSAGE));
                } else {
                    // Handle the successful response
                    response.json()
                    .then(json => {
                        dispatch(loginSuccessful(json.authorisation_code));
                    });
                }
        },
        error => {
            console.error('An error occured calling the auth endpoint.', error);
            dispatch(loginFailed(INTERNAL_ERROR_MESSAGE));
        });
    }
};