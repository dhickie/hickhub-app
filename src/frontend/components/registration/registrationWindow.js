import React from 'react';
import PropTypes from 'prop-types';
import PasswordBodyContainer from '../../containers/registration/passwordBody';
import PasswordButtonRowContainer from '../../containers/registration/passwordButtonRow';
import EmailBodyContainer from '../../containers/registration/emailBody';
import EmailButtonRowContainer from '../../containers/registration/emailButtonRow';
import HeaderContainer from '../../containers/registration/header';
import SecurityBodyContainer from '../../containers/registration/securityBody';
import SecurityButtonRowContainer from '../../containers/registration/securityButtonRow';
import { RegistrationState } from '../../reducers/registrationReducers';

const RegistrationWindow = props => {
    var body = <div />;
    var buttonRow = <div />;
    switch (props.registrationState) {
        case RegistrationState.AWAITING_EMAIL:
        case RegistrationState.CHECKING_EMAIL:
            body = (
                <EmailBodyContainer />
            );
            buttonRow = (
                <EmailButtonRowContainer />
            );
            break;
        case RegistrationState.AWAITING_PASSWORD:
            body = (
                <PasswordBodyContainer />
            );
            buttonRow = (
                <PasswordButtonRowContainer />
            );
            break;
        case RegistrationState.AWAITING_SECURITY:
        case RegistrationState.REGISTERING:
            body = (
                <SecurityBodyContainer />
            );
            buttonRow = (
                <SecurityButtonRowContainer />
            );
            break;
    }

    var windowStyle = {
        margin: '50px auto',
        maxWidth: '500px',
        border: '1px solid #afafaf'
    };

    var bodyStyle = {
        padding: '10px 10px'
    };

    return (
        <div style={windowStyle}>
            <HeaderContainer />
            <div style={bodyStyle}>
                {body}
            </div>
            {buttonRow}
        </div>
    );
};

RegistrationWindow.propTypes = {
    registrationState: PropTypes.string
};

export default RegistrationWindow;