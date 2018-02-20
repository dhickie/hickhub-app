import {
    EMAIL_CHECK_STARTED,
    EMAIL_CHECK_SUCCESSFUL,
    EMAIL_CHECK_FAILED,
    EMAIL_INPUT_CHANGED,
    PASSWORD_INPUT_CHANGED,
    REPEAT_PASSWORD_INPUT_CHANGED,
    PASSWORD_COMPLETE
} from '../actions/registrationActions';

export const RegistrationState = {
    AWAITING_EMAIL: 'AWAITING_EMAIL',
    CHECKING_EMAIL: 'CHECKING_EMAIL',
    AWAITING_PASSWORD: 'AWAITING_PASSWORD',
    AWAITING_SECURITY: 'AWAITING_SECURITY',
    REGISTERING: 'REGISTERING'
};

const initialState = {
    state: RegistrationState.AWAITING_EMAIL,
    email: '',
    password: '',
    repeatPassword: '',
    error: ''
};

export function registrationWindow(state = initialState, action) {
    switch (action.type) {
        case EMAIL_INPUT_CHANGED:
            return Object.assign({}, state, { email: action.newValue });
        case EMAIL_CHECK_STARTED:
            return Object.assign({}, state, { state: RegistrationState.CHECKING_EMAIL });
        case EMAIL_CHECK_SUCCESSFUL:
            return Object.assign({}, state, { state: RegistrationState.AWAITING_PASSWORD });
        case EMAIL_CHECK_FAILED:
            return Object.assign({}, state, { state: RegistrationState.AWAITING_EMAIL, error: action.error });
        case PASSWORD_INPUT_CHANGED:
            return Object.assign({}, state, { password: action.newValue });
        case REPEAT_PASSWORD_INPUT_CHANGED:
            return Object.assign({}, state, { repeatPassword: action.newValue });
        case PASSWORD_COMPLETE:
            return Object.assign({}, state, { state: RegistrationState.AWAITING_SECURITY });
        default:
            return state;
    }
};