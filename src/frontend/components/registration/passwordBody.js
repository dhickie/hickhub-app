import React from 'react';
import PasswordInputContainer from '../../containers/registration/passwordInput';
import RepeatPasswordInputContainer from '../../containers/registration/repeatPasswordInput';
import PasswordButtonRowContainer from '../../containers/registration/passwordButtonRow';

const PasswordBody = props => {
    var inputStyle = {
        maxWidth: '250px',
        padding: '10px 0'
    };

    return (
        <div>
            Enter a password:
            <PasswordInputContainer style={inputStyle}/>
            Re-enter your password:
            <RepeatPasswordInputContainer style={inputStyle}/>
            <PasswordButtonRowContainer />
        </div>
    );
};

export default PasswordBody;