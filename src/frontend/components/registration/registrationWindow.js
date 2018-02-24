import React from 'react';
import PropTypes from 'prop-types';
import EmailBody from './emailBody';
import PasswordBody from './passwordBody';
import HeaderContainer from '../../containers/registration/header';
import SecurityBodyContainer from '../../containers/registration/securityBodyContainer';
import { RegistrationState } from '../../reducers/registrationReducers';

const RegistrationWindow = props => {
    var body = <div />;
    switch (props.registrationState) {
        case RegistrationState.AWAITING_EMAIL:
        case RegistrationState.CHECKING_EMAIL:
            body = (
                <EmailBody />
            );
            break;
        case RegistrationState.AWAITING_PASSWORD:
            body = (
                <PasswordBody />
            );
            break;
        case RegistrationState.AWAITING_SECURITY:
        case RegistrationState.REGISTERING:
            body = (
                <SecurityBodyContainer />
            );
            break;
    }

    return (
        <div>
            <HeaderContainer />
            {body}
        </div>
    );
};

RegistrationWindow.propTypes = {
    registrationState: PropTypes.string
};

export default RegistrationWindow;