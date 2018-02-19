import EmailNextButton from '../../components/registration/emailNextButton';
import { connect } from 'react-redux';
import { startCheckingEmail } from '../../actions/registrationActions';

const mapStateToProps = state => {
    return {
        registrationState: state.registration.state,
        email: state.registration.email
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: (email) => {
            dispatch(startEmailCheck(email));
        }
    };
}

const EmailNextButtonContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EmailNextButton);

export default EmailNextButtonContainer;