import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import { RegistrationState } from '../../reducers/registrationReducers';

const EmailNextButton = props => {
    var onClick = () => {
        props.onClick(props.email);
    };
    var isLoading = props.registrationState == RegistrationState.CHECKING_EMAIL ? true : false;

    return (
        <Button fluid loading={isLoading} onClick={onClick}>
            Next
        </Button>
    );
};

EmailNextButton.propTypes = {
    registrationState: PropTypes.string,
    email: PropTypes.string,
    onClick: PropTypes.func
};

export default EmailNextButton;