export const AppState = {
    LOGIN: 'LOGIN',
    REGISTRATION: 'REGISTRATION'
};

const initialState = {
    appState: AppState.LOGIN
};

export function app(state = initialState, action) {
    return state;
}