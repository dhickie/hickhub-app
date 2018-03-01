import ValidationError from '../../components/registration/validationError';
import { connect } from 'react-redux';
import { validateSecurityText } from '../../validators/registration';

const mapStateToProps = state => {
    var question = state.registration.securityQuestion;
    var disabled = validateSecurityText(question);
    var error = 'Your security question must contains at least one letter.';

    return {
        disabled,
        error
    };
};

const SecurityQuestionValidationErrorContainer = connect(
    mapStateToProps
)(ValidationError);

export default SecurityQuestionValidationErrorContainer;