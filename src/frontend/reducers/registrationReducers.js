import {
    EMAIL_CHECK_STARTED,
    EMAIL_CHECK_SUCCESSFUL,
    EMAIL_CHECK_FAILED,
    EMAIL_INPUT_CHANGED,
    PASSWORD_INPUT_CHANGED,
    REPEAT_PASSWORD_INPUT_CHANGED,
    PASSWORD_BACK_CLICKED,
    PASSWORD_COMPLETE,
    SECURITY_QUESTION_SELECTED,
    SECURITY_QUESTION_INPUT_CHANGED,
    SECURITY_ANSWER_INPUT_CHANGED,
    SECURITY_BACK_CLICKED,
    REGISTER_STARTED,
    REGISTER_FAILED,
    REGISTER_SUCCESSFUL
} from '../actions/registrationActions';

export const RegistrationState = {
    AWAITING_EMAIL: 'AWAITING_EMAIL',
    CHECKING_EMAIL: 'CHECKING_EMAIL',
    AWAITING_PASSWORD: 'AWAITING_PASSWORD',
    AWAITING_SECURITY: 'AWAITING_SECURITY',
    REGISTERING: 'REGISTERING'
};

export const SecurityQuestions = [
    `What was your Mother's maiden name?`,
    `What's your hometown?`,
    `Enter your own question`
];

const customQuestionIndex = 2;

const initialState = {
    state: RegistrationState.AWAITING_EMAIL,
    email: '',
    password: '',
    repeatPassword: '',
    securityQuestion: '',
    securityAnswer: '',
    customSecurityQuestion: false,
    error: ''
};

export function registration(state = initialState, action) {
    switch (action.type) {
        case EMAIL_INPUT_CHANGED:
            return Object.assign({}, state, { email: action.newValue });
        case EMAIL_CHECK_STARTED:
            return Object.assign({}, state, { state: RegistrationState.CHECKING_EMAIL });
        case EMAIL_CHECK_SUCCESSFUL:
            return Object.assign({}, state, { state: RegistrationState.AWAITING_PASSWORD, error: '' });
        case EMAIL_CHECK_FAILED:
            return Object.assign({}, state, { state: RegistrationState.AWAITING_EMAIL, error: action.error });
        case PASSWORD_INPUT_CHANGED:
            return Object.assign({}, state, { password: action.newValue });
        case REPEAT_PASSWORD_INPUT_CHANGED:
            return Object.assign({}, state, { repeatPassword: action.newValue });
        case PASSWORD_BACK_CLICKED:
            return Object.assign({}, state, { state: RegistrationState.AWAITING_EMAIL });
        case PASSWORD_COMPLETE:
            return Object.assign({}, state, { state: RegistrationState.AWAITING_SECURITY });
        case SECURITY_QUESTION_SELECTED:
            if (action.newValue == customQuestionIndex) {
                return Object.assign({}, state, { customSecurityQuestion: true, securityQuestion: '' });
            } else {
                return Object.assign({}, state, { customSecurityQuestion: false, securityQuestion: SecurityQuestions[action.newValue] });
            }
        case SECURITY_QUESTION_INPUT_CHANGED:
            return Object.assign({}, state, { securityQuestion: action.newValue });
        case SECURITY_ANSWER_INPUT_CHANGED:
            return Object.assign({}, state, { securityAnswer: action.newValue });
        case SECURITY_BACK_CLICKED:
            return Object.assign({}, state, { state: RegistrationState.AWAITING_PASSWORD });
        case REGISTER_STARTED:
            return Object.assign({}, state, { state: RegistrationState.REGISTERING });
        case REGISTER_FAILED:
            return Object.assign({}, state, { state: RegistrationState.AWAITING_SECURITY });
        case REGISTER_SUCCESSFUL:
            // TODO: We don't have anywhere to go yet when registration is successful
            return Object.assign({}, state, { state: RegistrationState.AWAITING_SECURITY, error: '' });
        default:
            return state;
    }
};