import React from 'react';
import { Input } from 'semantic-ui-react';
import { PasswordInputContainer } from '../../containers/registration/passwordInput';
import { RepeatPasswordInputContainer } from '../../containers/registration/repeatPasswordInput';
import { PasswordNextButtonContainer } from '../../containers/registration/passwordNextButton';

const PasswordBody = props => {
    return (
        <div>
            Enter a password:
            <PasswordInputContainer />
            Re-enter your password:
            <RepeatPasswordInputContainer />
            <PasswordNextButtonContainer />
        </div>
    );
};

export default PasswordBody;