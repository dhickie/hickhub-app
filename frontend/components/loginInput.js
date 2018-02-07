import React from 'react';
import { Input, Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { LoginState } from '../reducers/loginReducers';

const LoginInput = props => {
    var onChange = (event) => {
        props.onChange(event.target.value);
    };

    return (
        <Input 
            fluid 
            type={props.type}
            disabled={props.disabled} 
            onChange={onChange} 
            value={props.value} 
            placeholder={props.placeholder}/>
    );
};

LoginInput.propTypes = {
    type: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
};

export default LoginInput;