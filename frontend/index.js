import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import loginWindow from './reducers/loginReducers';
import LoginButtonContainer from './containers/loginButton';

const store = createStore(
    loginWindow,
    applyMiddleware(
        thunkMiddleware
    )
);

render(
    <Provider store={store}>
        <LoginButtonContainer />
    </Provider>,
    document.getElementById('root')
);