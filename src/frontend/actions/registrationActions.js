import fetch from 'cross-fetch';

export const EMAIL_CHECK_STARTED = 'EMAIL_CHECK_STARTED';
export const EMAIL_CHECK_SUCCESSFUL = 'EMAIL_CHECK_SUCCCESSFUL';
export const EMAIL_CHECK_FAILED = 'EMAIL_CHECK_FAILED';
export const EMAIL_INPUT_CHANGED = 'EMAIL_INPUT_CHANGED';
export const PASSWORD_INPUT_CHANGED = 'PASSWORD_INPUT_CHANGED';
export const REPEAT_PASSWORD_INPUT_CHANGED = 'REPEAT_PASSWORD_INPUT_CHANGED';
export const PASSWORD_BACK_CLICKED = 'PASSWORD_BACK_CLICKED';
export const PASSWORD_COMPLETE = 'PASSWORD_COMPLETE';
export const SECURITY_QUESTION_SELECTED = 'SECURITY_QUESTION_SELECTED';
export const SECURITY_QUESTION_INPUT_CHANGED = 'SECURITY_QUESTION_INPUT_CHANGED';
export const SECURITY_ANSWER_INPUT_CHANGED = 'SECURITY_ANSWER_INPUT_CHANGED';
export const SECURITY_BACK_CLICKED = 'SECURITY_BACK_CLICKED';
export const REGISTER_STARTED = 'REGISTER_STARTED';
export const REGISTER_FAILED = 'REGISTER_FAILED';
export const REGISTER_SUCCESSFUL = 'REGISTER_SUCCESSFUL';

// Constants
const EMAIL_IN_USE = 'This email address is already in use. Please use a different address.';
const INTERNAL_EMAIL_ERROR = 'An unknown error occured attempting to check the email address. Please try again later.';
const INTERNAL_REGISTER_ERROR = 'An unknown error occured attempting to register. Please try again later.';

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

function registerStarted() {
    return { type: REGISTER_STARTED };
};

function registerFailed(error) {
    return { type: REGISTER_FAILED, error };
};

function registerSuccessful() {
    return { type: REGISTER_SUCCESSFUL };
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

export function passwordBackClicked() {
    return { type: PASSWORD_BACK_CLICKED };
};

export function passwordComplete() {
    return { type: PASSWORD_COMPLETE };
};

export function securityQuestionSelected(newValue) {
    return { type: SECURITY_QUESTION_SELECTED, newValue };
};

export function securityQuestionInputChanged(newValue) {
    return { type: SECURITY_QUESTION_INPUT_CHANGED, newValue };
};

export function securityAnswerInputChanged(newValue) {
    return { type: SECURITY_ANSWER_INPUT_CHANGED, newValue };
};

export function securityBackClicked() {
    return { type: SECURITY_BACK_CLICKED };
};

// Async action creators
export function startEmailCheck(email) {
    return function(dispatch) {
        dispatch(emailCheckSuccessful());
        // dispatch(emailCheckStarted());

        // var body = JSON.stringify({
        //     email
        // });
        // var options = {
        //     method: 'POST',
        //     body: body
        // };

        // fetch('/registration/emailcheck', options)
        // .then(response => {
        //     if (response.status != 200) {
        //         dispatch(emailCheckFailed(INTERNAL_EMAIL_ERROR));
        //     } else {
        //         // Handle the successful response
        //         response.json()
        //         .then(json => {
        //             if (json.email_available) {
        //                 dispatch(emailCheckSuccessful());
        //             } else {
        //                 dispatch(emailCheckFailed(EMAIL_IN_USE));
        //             }
        //         });
        //     }
        // },
        // error => {
        //     console.error('An error occured checking the email availability.', error);
        //     dispatch(emailCheckFailed(INTERNAL_EMAIL_ERROR));
        // });
    };
};

export function startRegister(email, password, securityQuestion, securityAnswer) {
    return function(dispatch) {
        dispatch(registerStarted());

        var body = JSON.stringify({
            email,
            password,
            securityQuestion,
            securityAnswer
        });
        var options = {
            method: 'POST',
            body
        };

        fetch('/registration/register', options)
        .then(response => {
            if (response.status != 200) {
                dispatch(registerFailed(INTERNAL_REGISTER_ERROR));
            } else {
                response.json()
                .then(json => {
                    // The response will contain an access token to get started, don't do anything with this yet
                    dispatch(registerSuccessful());
                });
            }
        },
        error => {
            console.error('An error occured registering the user.', error);
            dispatch(registerFailed(INTERNAL_REGISTER_ERROR));
        });
    };
}