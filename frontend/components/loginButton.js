import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { LoginState } from '../reducers/loginReducers';

const LoginButton = props => {
    var onClick = () => {
        props.onClick(props.email, props.password, props.clientId, props.scope, props.redirectUri)
    };
    var isLoading = props.loginState == LoginState.LOGGING_IN ? true : false;

    return (
        <Button loading={isLoading} onClick={onClick}>
            Log in
        </Button>
    )
};

LoginButton.propTypes = {
    loginState: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    clientId: PropTypes.string,
    scope: PropTypes.string,
    redirectUri: PropTypes.string,
    onClick: PropTypes.func
};

export default LoginButton;