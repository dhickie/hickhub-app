import React from 'react';
import PropTypes from 'prop-types';
import ValidationError from './validationError';
import { Input } from 'semantic-ui-react';

const EmailUpdateBody = props => {
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
                    <Input 
                        fluid 
                        type='input' 
                        disabled={props.inputDisabled} 
                        value={props.email} 
                        placeholder='Email address'
                        onChange={props.onEmailChange}
                        style={emailStyle}/>
                </div>
                <div style={displayInline}>
                    <ValidationError disabled={!props.displayError} error='Please enter a valid email address' />
                </div>
            </div>
        </div>
    );
};

EmailUpdateBody.propTypes = {
    inputDisabled: PropTypes.bool,
    email: PropTypes.string,
    onEmailChange: PropTypes.func,
    displayError: PropTypes.bool
};

export default EmailUpdateBody;