import React from 'react';
import SecurityDropdownContainer from '../../containers/registration/securityDropdown';
import SecurityQuestionInputContainer from '../../containers/registration/securityQuestionInput';
import SecurityQuestionValidationErrorContainer from '../../containers/registration/securityQuestionValidationError';
import SecurityAnswerInputContainer from '../../containers/registration/securityAnswerInput';
import SecurityAnswerValidationErrorContainer from '../../containers/registration/securityAnswerValidationError';
import SecurityButtonRowContainer from '../../containers/registration/securityButtonRow';

const SecurityBody = props => {
    var inputStyle = {
        minWidth: '250px',
        maxWidth: '250px',
        padding: '10px 0'
    };

    var displayInline = {
        display: 'inline-block'
    };

    var questionContent;
    if (props.customSecurityQuestion) {
        questionContent = (
            <div>
                Select a security question:
                <div style={inputStyle}>
                    <SecurityDropdownContainer/>
                </div>
                <div>
                    <div style={displayInline}>
                        <SecurityQuestionInputContainer style={inputStyle}/>
                    </div>
                    <div style={displayInline}>
                        <SecurityQuestionValidationErrorContainer />
                    </div>
                </div>
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
            <div>
                <div style={displayInline}>
                    <SecurityAnswerInputContainer style={inputStyle}/>
                </div>
                <div style={displayInline}>
                    <SecurityAnswerValidationErrorContainer />
                </div>
            </div>
            <SecurityButtonRowContainer />
        </div>
    );
};

export default SecurityBody;