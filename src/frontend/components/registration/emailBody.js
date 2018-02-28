import React from 'react';
import EmailInputContainer from '../../containers/registration/emailInput';
import EmailButtonRowContainer from '../../containers/registration/emailButtonRow';
import EmailValidationErrorContainer from '../../containers/registration/emailValidationError';

const EmailBody = props => {
    var emailStyle = {
        minWidth: '250px',
        maxWidth: '250px',
        padding: '10px 0'
    };

    var displayInline = {
        display: 'inline-block'
    };

    return (
        <div>
            Enter your email address:
            <div>
                <div style={displayInline}>
                    <EmailInputContainer style={emailStyle}/>
                </div>
                <div style={displayInline}>
                    <EmailValidationErrorContainer />
                </div>
            </div>
            <EmailButtonRowContainer />
        </div>
    );
};

export default EmailBody;