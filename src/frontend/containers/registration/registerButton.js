import { Button } from 'semantic-ui-react';
import { RegistrationState } from '../../reducers/registrationReducers';
import { connect } from 'react-redux';
import { startRegister } from '../../actions/registrationActions';

const mapStateToProps = state => {
    var isLoading = state.registration.state == RegistrationState.REGISTERING ? true : false;

    return {
        fluid: true,
        loading: isLoading,
        content: 'Register',
        email: state.registration.email,
        password: state.registration.password,
        securityQuestion: state.registration.securityQuestion,
        securityAnswer: state.registration.securityAnswer
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: (event, data) => {
            dispatch(startRegister(data.email, data.password, data.securityQuestion, data.securityAnswer));
        }
    };
}

const RegisterButtonContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Button);

export default RegisterButtonContainer;