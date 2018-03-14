import PasswordUpdateBody from '../../components/account/passwordUpdateBody';
import { connect } from 'react-redux';
import { passwordInputChanged, repeatPasswordInputChanged } from '../../actions/registrationActions';
import { validatePassword, validateRepeatPassword } from '../../validators/registration';

const mapStateToProps = state => {
    var password = state.registration.password;
    var displayPasswordError = !validatePassword(password);
    var repeatPassword = state.registration.repeatPassword;
    var displayRepeatPasswordError = !validateRepeatPassword(repeatPassword);

    return {
        password,
        displayPasswordError,
        repeatPassword,
        displayRepeatPasswordError
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onPasswordChange: (event, data) => {
            dispatch(passwordInputChanged(event.target.value));
        },
        onRepeatPasswordChange: (event, data) => {
            dispatch(repeatPasswordInputChanged(event.target.value));
        }
    };
};

const PasswordBodyContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PasswordUpdateBody);

export default PasswordBodyContainer;