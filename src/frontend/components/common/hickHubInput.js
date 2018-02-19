import React from 'react';
import PropTypes from 'prop-types';
import { Input, Grid } from 'semantic-ui-react';
import { LoginState } from '../reducers/loginReducers';

const HickHubInput = props => {
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

HickHubInput.propTypes = {
    type: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
};

export default HickHubInput;