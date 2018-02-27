import React from 'react';
import EmailInputContainer from '../../containers/registration/emailInput';
import EmailButtonRowContainer from '../../containers/registration/emailButtonRow';

const EmailBody = props => {
    var emailStyle = {
        maxWidth: '250px',
        padding: '10px 0'
    };

    return (
        <div>
            Enter your email address:
            <EmailInputContainer style={emailStyle}/>
            <EmailButtonRowContainer />
        </div>
    );
};

export default EmailBody;