import NextButton from '../../components/registration/nextButton';
import { connect } from 'react-redux';
import { startCheckingEmail } from '../../actions/registrationActions';
import { RegistrationState } from '../../reducers/registrationReducers';

const mapStateToProps = state => {
    var isLoading = state.registration.state == RegistrationState.CHECKING_EMAIL ? true : false;
    var isDisabled = false;
    var sectionValues = [state.registration.email];

    return {
        isLoading,
        isDisabled,
        sectionValues
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: (sectionValues) => {
            dispatch(startEmailCheck(sectionValues[0]));
        }
    };
}

const EmailNextButtonContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NextButton);

export default EmailNextButtonContainer;