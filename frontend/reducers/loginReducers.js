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
    LOGIN_FAILED: 'LOGIN_FAILED',
    LOGIN_SUCCESSFUL: 'LOGIN_SUCCESSFUL'
};

const initialState = {
    loginState: LoginState.AWAITING_CREDS,
    email: '',
    password: '',
    error: '',
    clientId: '',
    scope: '',
    redirectUri: '',
    authCode: ''
};

export default function loginWindow(state = initialState, action) {
    switch (action.type) {
        case LOGIN_STARTED:
            return Object.assign({}, state, { loginState: LoginState.LOGGING_IN });
        case LOGIN_SUCCESSFUL:
            return Object.assign({}, state, { loginState: LoginState.LOGIN_SUCCESSFUL, authCode: action.authCode });
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