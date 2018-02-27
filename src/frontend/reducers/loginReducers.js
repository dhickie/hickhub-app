import { 
    LOGIN_STARTED,
    LOGIN_SUCCESSFUL,
    LOGIN_FAILED,
    EMAIL_INPUT_CHANGED,
    PASSWORD_INPUT_CHANGED
} from '../actions/loginActions'

export const LoginState = {
    AWAITING_CREDS: 'AWAITING_CREDS',
    LOGGING_IN: 'LOGGING_IN',
    LOGIN_FAILED: 'LOGIN_FAILED'
};

const initialState = {
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

export function login(state = initialState, action) {
    switch (action.type) {
        case LOGIN_STARTED:
            return Object.assign({}, state, { loginState: LoginState.LOGGING_IN });
        case LOGIN_SUCCESSFUL:
            // When login is successful, then redirect to the redirect URI from the state
            var redirect = `${state.redirectUri}?state=${state.state}&code=${action.authCode}`;
            window.location.href = redirect;
            return state;
        case LOGIN_FAILED:
            return Object.assign({}, state, { loginState: LoginState.LOGIN_FAILED, error: action.error });
        case EMAIL_INPUT_CHANGED:
            return Object.assign({}, state, { email: action.newValue });
        case PASSWORD_INPUT_CHANGED:
            return Object.assign({}, state, { password: action.newValue });
        default:
            return state;
    }
};