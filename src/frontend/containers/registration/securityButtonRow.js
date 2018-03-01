import ButtonRow from '../../components/registration/buttonRow';
import { RegistrationState } from '../../reducers/registrationReducers';
import { connect } from 'react-redux';
import { startRegister } from '../../actions/registrationActions';
import { securityBackClicked } from '../../actions/registrationActions';
import { validateSecurityText } from '../../validators/registration';

const mapStateToProps = state => {
    var nextLoading = state.registration.state == RegistrationState.REGISTERING ? true : false;
    var question = state.registration.securityQuestion;
    var answer = state.registration.securityAnswer;
    var nextDisabled = !validateSecurityText(question) || !validateSecurityText(question);
    var nextContent = 'Register';
    var nextData = [
        state.registration.email,
        state.registration.password,
        state.registration.securityQuestion,
        state.registration.securityAnswer
    ];
    var backEnabled = true;
    var backContent = 'Back';

    return {
        nextLoading,
        nextDisabled,
        nextContent,
        nextData,
        backEnabled,
        backContent
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onNextClick: (event, data) => {
            var email = data.sectionvalues[0];
            var password = data.sectionvalues[1];
            var securityQuestion = data.sectionvalues[2];
            var securityAnswer = data.sectionvalues[3];

            dispatch(startRegister(email, password, securityQuestion, securityAnswer));
        },
        onBackClick: (event, data) => {
            dispatch(securityBackClicked());
        }
    };
};

const SecurityButtonRowContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ButtonRow);

export default SecurityButtonRowContainer;