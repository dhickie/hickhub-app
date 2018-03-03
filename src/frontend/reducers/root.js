import { login, LoginState } from './loginReducers';
import { registration, RegistrationState } from './registrationReducers';
import { app, AppState } from './appReducers';
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

const initialAppState = {
    state: AppState.LOGIN
};

const initialState = {
    login: initialLoginState,
    registration: initialRegistrationState,
    app: initialAppState
};

export function hickHubApp(state = initialState, action) {
    return {
        login: login(state.login, action),
        registration: registration(state.registration, action),
        app: app(state.app, action)
    };
};