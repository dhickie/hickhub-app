import React from 'react';
import PropTypes from 'prop-types';
import ValidationError from './validationError';
import { Input } from 'semantic-ui-react';

const PasswordUpdateBody = props => {
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
                    <Input
                        fluid
                        type='password'
                        placeholder='Password'
                        style={inputStyle}
                        value={props.password}
                        onChange={props.onPasswordChange} />
                </div>
                <div style={displayInline}>
                    <ValidationError 
                        disabled={!props.displayPasswordError}
                        error='Your password must be 8 or more characters, and contain at least one number, letter and special character.' />
                </div>
            </div>   
            Re-enter your password:
            <div>
                <div style={displayInline}>
                    <Input
                        fluid
                        type='password'
                        placeholder='Password'
                        style={inputStyle}
                        value={props.repeatPassword}
                        onChange={props.onRepeatPasswordChange} />
                </div>
                <div style={displayInline}>
                    <ValidationError
                        disabled={!props.displayRepeatPasswordError}
                        error='The two entered passwords must be the same' />
                </div>
            </div>
        </div>
    );
};

PasswordUpdateBody.propTypes = {
    password: PropTypes.string,
    onPasswordChange: PropTypes.func,
    displayPasswordError: PropTypes.bool,
    repeatPassword: PropTypes.string,
    onRepeatPasswordChange: PropTypes.func,
    displayRepeatPasswordError: PropTypes.bool
};

export default PasswordUpdateBody;