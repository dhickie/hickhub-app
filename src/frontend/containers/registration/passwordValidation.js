import ValidationError from '../../components/registration/validationError';
import { connect } from 'react-redux';
import { validatePassword } from '../../validators/registration';

const mapStateToProps = state => {
    var password = state.registration.password;
    var disabled = validatePassword(password);
    var error = 'Your password must be 8 or more characters, and contain at least one number, letter and special character.';

    return {
        disabled,
        error
    };
};

const PasswordValidationErrorContainer = connect(
    mapStateToProps
)(ValidationError);

export default PasswordValidationErrorContainer;