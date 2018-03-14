import React from 'react';
import PropTypes from 'prop-types';
import ValidationError from '../../components/registration/validationError';
import { Dropdown, Input } from 'semantic-ui-react';
import { validateSecurityText } from '../../validators/registration';

const SecurityUpdateBody = props => {
    var inputStyle = {
        minWidth: '250px',
        maxWidth: '250px',
        padding: '10px 0'
    };

    var displayInline = {
        display: 'inline-block'
    };

    var securityDropdown = (
        <Dropdown
            fluid
            selection
            placeholder='Select a security question'
            options={props.questionOptions} 
            onChange={props.onQuestionChange}/>
    );
    var questionContent;
    if (props.customSecurityQuestion) {
        questionContent = (
            <div>
                Select a security question:
                <div style={inputStyle}>
                    {securityDropdown}
                </div>
                <div>
                    <div style={displayInline}>
                        <Input
                            style={inputStyle}
                            fluid
                            type='input'
                            value={props.securityQuestion}
                            placeholder='Security question'
                            onChange={props.onQuestionInputChange} />
                    </div>
                    <div style={displayInline}>
                        <ValidationError 
                            disabled={validateSecurityText(props.securityQuestion)} 
                            error='Your security question must contain at least one letter.' />
                    </div>
                </div>
            </div>
        );
    } else {
        questionContent = (
            <div>
                Select a security question:
                <div style={inputStyle}>
                    {securityDropdown}
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
                    <Input
                        style={inputStyle}
                        fluid
                        type='input'
                        value={props.securityAnswer}
                        placeholder='Security answer'
                        onChange={props.onSecurityAnswerChange} />
                </div>
                <div style={displayInline}>
                    <ValidationError
                        disabled={validateSecurityText(props.securityAnswer)}
                        error='Your security answer must contain at least one letter' />
                </div>
            </div>
        </div>
    );
};

SecurityUpdateBody.propTypes = {
    customSecurityQuestion: PropTypes.bool,
    questionOptions: PropTypes.array,
    onQuestionChange: PropTypes.func,
    securityQuestion: PropTypes.string,
    onQuestionInputChange: PropTypes.func,
    securityAnswer: PropTypes.string,
    onSecurityAnswerChange: PropTypes.func
};

export default SecurityUpdateBody;