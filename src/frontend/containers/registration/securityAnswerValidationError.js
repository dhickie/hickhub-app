import ValidationError from '../../components/registration/validationError';
import { connect } from 'react-redux';
import { validateSecurityText } from '../../validators/registration';

const mapStateToProps = state => {
    var answer = state.registration.securityAnswer;
    var disabled = validateSecurityText(answer);
    var error = 'Your security answer must contains at least one letter.';

    return {
        disabled,
        error
    };
};

const SecurityAnswerValidationErrorContainer = connect(
    mapStateToProps
)(ValidationError);

export default SecurityAnswerValidationErrorContainer;