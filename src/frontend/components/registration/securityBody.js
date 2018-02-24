import React from 'react';
import { SecurityDropdownContainer } from '../../containers/registration/securityDropdown';
import { SecurityQuestionInputContainer } from '../../containers/registration/securityQuestionInput';
import { SecurityAnswerInputContainer } from '../../containers/registration/securityAnswerInput';
import { RegisterButtonContainer } from '../../containers/registration/registerButton';

const SecurityBody = props => {
    var questionContent;
    if (props.customSecurityQuestion) {
        questionContent = (
            <div>
                Select a security question:
                <SecurityDropdownContainer />
                <SecurityQuestionInputContainer />
            </div>
        );
    } else {
        questionContent = (
            <div>
                Select a security question:
                <SecurityDropdownContainer />
            </div>
        );
    }

    return (
        <div>
            {questionContent}
            Enter a security answer:
            <SecurityAnswerInputContainer />
            <RegisterButtonContainer />
        </div>
    );
};

export default SecurityBody;