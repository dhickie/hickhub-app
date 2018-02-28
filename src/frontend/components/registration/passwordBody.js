import React from 'react';
import PasswordInputContainer from '../../containers/registration/passwordInput';
import PasswordValidationErrorContainer from '../../containers/registration/passwordValidation';
import RepeatPasswordInputContainer from '../../containers/registration/repeatPasswordInput';
import RepeatPasswordValidationErrorContainer from '../../containers/registration/repeatPasswordValidation';
import PasswordButtonRowContainer from '../../containers/registration/passwordButtonRow';

const PasswordBody = props => {
    var inputStyle = {
        minWidth: '250px',
        maxWidth: '250px',
        padding: '10px 0'
    };

    var displayInline = {
        display: 'inline-block'
    };

    return (
        <div>
            Enter a password:
            <div>
                <div style={displayInline}>
                    <PasswordInputContainer style={inputStyle}/>
                </div>
                <div style={displayInline}>
                    <PasswordValidationErrorContainer />
                </div>
            </div>   
            Re-enter your password:
            <div>
                <div style={displayInline}>
                    <RepeatPasswordInputContainer style={inputStyle}/>
                </div>
                <div style={displayInline}>
                    <RepeatPasswordValidationErrorContainer />
                </div>
            </div>   
            <PasswordButtonRowContainer />
        </div>
    );
};

export default PasswordBody;