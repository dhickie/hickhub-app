import React from 'react';
import { EmailInputContainer } from '../../containers/registration/emailInput';
import { EmailNextButtonContainer } from '../../containers/registration/emailNextButton';

const EmailBody = props => {
    return (
        <div>
            Enter your email address:
            <EmailInputContainer />
            <EmailNextButtonContainer />
        </div>
    );
};

export default EmailBody;