import React from 'react';
import EmailInputContainer from '../containers/emailInput';
import PasswordInputContainer from '../containers/passwordInput';
import LoginButtonContainer from '../containers/loginButton';
import LoginErrorContainer from '../containers/loginError';
import { Grid, Header, Image } from 'semantic-ui-react';

const LoginWindow = props => {
    var inputPadding = {
        padding: '10px 0'
    };

    var buttonPadding = {
        padding: '20px 0'
    }

    var windowStyle = {
        margin: '50px auto',
        maxWidth: '425px',
        padding: '0 20px'
    }

    return (
        <div style={windowStyle}>
            <Image src='/Coding Projects/HickHub/hickhub-app/frontend/assets/Logo.jpg' fluid centered/>
            <div style={inputPadding}>
                <h2>Log in</h2>
            </div>
            <div style={inputPadding}>
                <EmailInputContainer />
            </div>
            <div style={inputPadding}>
                <PasswordInputContainer />
            </div>
            <div style={buttonPadding}>
                <LoginErrorContainer />
            </div>
            <LoginButtonContainer />
        </div>
    );
}

export default LoginWindow;