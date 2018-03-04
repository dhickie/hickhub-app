import { login, LoginState } from './loginReducers';
import { registration, RegistrationState } from './registrationReducers';
import { dashboard, Tabs } from './dashboardReducers';
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

const initialDashboardState = {
    activeTab: Tabs.ACCOUNT
};

const initialAppState = {
    state: AppState.LOGIN,
    accessToken: '',
    refreshToken: '',
    accessTokenExpiry: new Date()
};

const initialState = {
    login: initialLoginState,
    registration: initialRegistrationState,
    dashboard: initialDashboardState,
    app: initialAppState
};

export function hickHubApp(state = initialState, action) {
    return {
        login: login(state.login, action),
        registration: registration(state.registration, action),
        dashboard: dashboard(state.dashboard, action),
        app: app(state.app, action)
    };
};