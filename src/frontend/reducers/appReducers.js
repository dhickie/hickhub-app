export const AppState = {
    LOGIN: 'LOGIN',
    REGISTRATION: 'REGISTRATION',
    DASHBOARD: 'DASHBOARD'
};

const initialState = {
    appState: AppState.LOGIN
};

export function app(state = initialState, action) {
    return state;
}