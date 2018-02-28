import ValidationError from '../../components/registration/validationError';
import { connect } from 'react-redux';
import { validateEmail } from '../../validators/registration';

const mapStateToProps = state => {
    var email = state.registration.email;
    var disabled = validateEmail(email);
    var error = 'Please enter a valid email address';

    return {
        disabled,
        error
    };
};

const EmailValidationErrorContainer = connect(
    mapStateToProps
)(ValidationError);

export default EmailValidationErrorContainer;