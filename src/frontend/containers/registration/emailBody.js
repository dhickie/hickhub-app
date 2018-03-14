import EmailUpdateBody from '../../components/account/emailUpdateBody';
import { connect } from 'react-redux';
import { emailInputChange } from '../../actions/registrationActions';
import { RegistrationState } from '../../reducers/registrationReducers';
import { validateEmail } from '../../validators/registration';

const mapStateToProps = state => {
    var inputDisabled = state.registration.state == RegistrationState.CHECKING_EMAIL;
    var email = state.registration.email;
    var displayError = !validateEmail(email);

    return {
        inputDisabled,
        email,
        displayError
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onEmailChange: (event, data) => {
            dispatch(emailInputChanged(event.target.value));
        }
    };
};

const EmailBodyContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EmailUpdateBody);

export default EmailBodyContainer;