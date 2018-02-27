import React from 'react';
import SecurityDropdownContainer from '../../containers/registration/securityDropdown';
import SecurityQuestionInputContainer from '../../containers/registration/securityQuestionInput';
import SecurityAnswerInputContainer from '../../containers/registration/securityAnswerInput';
import SecurityButtonRowContainer from '../../containers/registration/securityButtonRow';

const SecurityBody = props => {
    var inputStyle = {
        maxWidth: '250px',
        padding: '10px 0'
    };

    var questionContent;
    if (props.customSecurityQuestion) {
        questionContent = (
            <div>
                Select a security question:
                <div style={inputStyle}>
                    <SecurityDropdownContainer/>
                </div>
                <SecurityQuestionInputContainer style={inputStyle}/>
            </div>
        );
    } else {
        questionContent = (
            <div>
                Select a security question:
                <div style={inputStyle}>
                    <SecurityDropdownContainer style={inputStyle}/>
                </div>
            </div>
        );
    }

    return (
        <div>
            {questionContent}
            Enter a security answer:
            <SecurityAnswerInputContainer style={inputStyle}/>
            <SecurityButtonRowContainer />
        </div>
    );
};

export default SecurityBody;