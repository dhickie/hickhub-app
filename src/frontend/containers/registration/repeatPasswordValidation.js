import ValidationError from '../../components/registration/validationError';
import { connect } from 'react-redux';
import { validateRepeatPassword } from '../../validators/registration';

const mapStateToProps = state => {
    var password = state.registration.password;
    var repeatPassword = state.registration.repeatPassword;
    var disabled = validateRepeatPassword(password, repeatPassword);
    var error = 'The two entered passwords must be the same';

    return {
        disabled,
        error
    };
};

const RepeatPasswordValidationErrorContainer = connect(
    mapStateToProps
)(ValidationError);

export default RepeatPasswordValidationErrorContainer;