import React from 'react';
import { Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const LoginError = props => {
    return (
        <Container textAlign='center'>
            <font color='red'>{props.errorMessage}</font>
        </Container>
    );
};

LoginError.propTypes = {
    errorMessage: PropTypes.string
};

export default LoginError;