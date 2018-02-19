import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { LoginState } from '../reducers/loginReducers';

const LoginButton = props => {
    var onClick = () => {
        props.onClick(props.email, props.password, props.clientId, props.scope, props.redirectUri);
    };
    var isLoading = props.loginState == LoginState.LOGGING_IN ? true : false;

    var padding = {
        padding: '0 30px'
    };

    return (
        <div style={padding}>
            <Button fluid loading={isLoading} onClick={onClick}>
                Log in
            </Button>
        </div>
    );
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