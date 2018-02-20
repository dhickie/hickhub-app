import fetch from 'cross-fetch';

export const EMAIL_CHECK_STARTED = 'EMAIL_CHECK_STARTED';
export const EMAIL_CHECK_SUCCESSFUL = 'EMAIL_CHECK_SUCCCESSFUL';
export const EMAIL_CHECK_FAILED = 'EMAIL_CHECK_FAILED';
export const EMAIL_INPUT_CHANGED = 'EMAIL_INPUT_CHANGED';
export const PASSWORD_INPUT_CHANGED = 'PASSWORD_INPUT_CHANGED';
export const REPEAT_PASSWORD_INPUT_CHANGED = 'REPEAT_PASSWORD_INPUT_CHANGED';
export const PASSWORD_COMPLETE = 'PASSWORD_COMPLETE';

// Constants
const EMAIL_IN_USE = 'This email address is already in use. Please use a different address.';
const INTERNAL_ERROR = 'An unknown error occured attempting to check the email address. Please try again later.';

// Sync action creators
function emailCheckStarted() {
    return { type: EMAIL_CHECK_STARTED };
};

function emailCheckFailed(error) {
    return { type: EMAIL_CHECK_FAILED, error };
};

function emailCheckSuccessful() {
    return { type: EMAIL_CHECK_SUCCESSFUL };
};

export function emailInputChanged(newValue) {
    return { type: EMAIL_INPUT_CHANGED, newValue };
};

export function passwordInputChanged(newValue) {
    return { type: PASSWORD_INPUT_CHANGED, newValue };
};

export function repeatPasswordInputChanged(newValue) {
    return { type: REPEAT_PASSWORD_INPUT_CHANGED, newValue };
};

export function passwordComplete() {
    return { type: PASSWORD_COMPLETE };
};

// Async action creators
export function startEmailCheck(email) {
    return function(dispatch) {
        dispatch(emailCheckStarted());

        var body = JSON.stringify({
            email: email
        });
        var options = {
            method: 'POST',
            body: body
        }

        fetch('/registration/emailcheck', options)
        .then(response => {
            if (response.status != 200) {
                dispatch(emailCheckFailed(INTERNAL_ERROR));
            } else {
                // Handle the successful response
                response.json()
                .then(json => {
                    if (json.email_available) {
                        dispatch(emailCheckSuccessful());
                    } else {
                        dispatch(emailCheckFailed(EMAIL_IN_USE));
                    }
                });
            }
        },
        error => {
            console.error('An error occured checking the email availability.', error);
            dispatch(emailCheckFailed(INTERNAL_ERROR));
        });
    }
};