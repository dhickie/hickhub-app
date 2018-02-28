import ButtonRow from '../../components/registration/buttonRow';
import { connect } from 'react-redux';
import { startEmailCheck } from '../../actions/registrationActions';
import { RegistrationState } from '../../reducers/registrationReducers';
import { validateEmail } from '../../validators/registration';

const mapStateToProps = state => {
    var nextLoading = state.registration.state == RegistrationState.CHECKING_EMAIL ? true : false;
    var nextDisabled = !validateEmail(state.registration.email);
    var nextContent = 'Next';
    var nextData = [state.registration.email];

    return {
        nextLoading,
        nextDisabled,
        nextContent,
        nextData
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onNextClick: (event, data) => {
            dispatch(startEmailCheck(data.sectionvalues[0]));
        }
    };
}

const EmailButtonRowContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ButtonRow);

export default EmailButtonRowContainer;