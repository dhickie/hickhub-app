import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import loginWindow from './reducers/loginReducers';
import LoginWindow from './components/loginWindow';

const store = createStore(
    loginWindow,
    applyMiddleware(
        thunkMiddleware
    )
);

render(
    <Provider store={store}>
        <LoginWindow />
    </Provider>,
    document.getElementById('root')
);