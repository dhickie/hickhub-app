import SecurityUpdateBody from '../../components/account/securityUpdateBody';
import { connect } from 'react-redux';
import { SecurityQuestions } from '../../reducers/registrationReducers';
import { securityQuestionSelected, securityQuestionInputChanged, securityAnswerInputChanged } from '../../actions/registrationActions';

const mapStateToProps = state => {
    return {
        customSecurityQuestion: state.registration.customSecurityQuestion,
        questionOptions: SecurityQuestions,
        securityQuestion: state.registration.securityQuestion,
        securityAnswer: state.registration.securityAnswer
    };
};

const mapDispatchToProps = state => {
    return {
        onQuestionChange: (event, data) => {
            dispatch(securityQuestionSelected(data.value));
        },
        onQuestionInputChange: (event, data) => {
            dispatch(securityQuestionInputChanged(data.value));
        },
        onSecurityAnswerChange: (event, data) => {
            dispatch(securityAnswerInputChanged(data.value));
        }
    };
};

const SecurityBodyContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SecurityUpdateBody);

export default SecurityBodyContainer;