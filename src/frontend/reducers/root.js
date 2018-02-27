import { login } from './loginReducers';
import { LoginState } from './loginReducers';
import { registration } from './registrationReducers';
import { RegistrationState } from './registrationReducers';
import { combineReducers } from 'redux';

const initialLoginState = {
    loginState: LoginState.AWAITING_CREDS,
    email: '',
    password: '',
    error: '',
    clientId: '',
    scope: '',
    redirectUri: '',
    state: '',
    authCode: ''
};

const initialRegistrationState = {
    state: RegistrationState.AWAITING_EMAIL,
    email: '',
    password: '',
    repeatPassword: '',
    securityQuestion: '',
    securityAnswer: '',
    customSecurityQuestion: false,
    error: ''
};

const initialState = {
    login: initialLoginState,
    registration: initialRegistrationState
};

export function hickHubApp(state = initialState, action) {
    return {
        login: login(state.login, action),
        registration: registration(state.registration, action)
    };
};