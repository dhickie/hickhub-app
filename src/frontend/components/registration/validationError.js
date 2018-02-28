import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Popup } from 'semantic-ui-react';

const ValidationError = props => {
    // Return an exclamation icon with popup text explaining the error
    var icon = (
        <Icon color='red' name='exclamation'/>
    );

    var popupStyle = {
        float: 'right'
    };

    if (!props.disabled) {
        return (
            <Popup
                trigger={icon}
                content={props.error}/>
        );
    } else {
        return <div/>;
    }
};

ValidationError.propTypes = {
    error: PropTypes.string
};

export default ValidationError;