import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { loginWindow } from './reducers/loginReducers';
import { LoginWindow } from './components/loginWindow';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = createStore(
    loginWindow,
    preloadedState,
    applyMiddleware(
        thunkMiddleware
    )
);

hydrate(
    <Provider store={store}>
        <LoginWindow />
    </Provider>,
    document.getElementById('root')
);