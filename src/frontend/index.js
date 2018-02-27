import React from 'react';
import thunkMiddleware from 'redux-thunk';
import RegistrationWindowContainer from './containers/registration/registrationWindow';
import { hickHubApp } from './reducers/root';
import { LoginWindow } from './components/loginWindow';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = createStore(
    hickHubApp,
    preloadedState,
    applyMiddleware(
        thunkMiddleware
    )
);

hydrate(
    <Provider store={store}>
        <RegistrationWindowContainer />
    </Provider>,
    document.getElementById('root')
);