import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import { RegistrationState } from '../../reducers/registrationReducers';

const NextButton = props => {
    var onClick = () => {
        props.onClick(props.sectionValues);
    };

    return (
        <Button fluid loading={props.isLoading} disabled={props.isDisabled} onClick={onClick}>
            Next
        </Button>
    );
};

NextButton.propTypes = {
    sectionValues: PropTypes.arrayOf(PropTypes.string),
    isLoading: PropTypes.bool,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func
};

export default NextButton;