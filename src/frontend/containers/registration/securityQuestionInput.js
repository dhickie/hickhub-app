import { Input } from 'semantic-ui-react';
import { RegistrationState } from '../../reducers/registrationReducers';
import { securityQuestionInputChanged } from '../../actions/registrationActions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        fluid: true,
        type: 'input',
        value: state.registration.securityQuestion,
        placeholder: 'Security question'
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onChange: (event, data) => {
            dispatch(securityQuestionInputChanged(event.target.value));
        }
    };
};

const SecurityQuestionInputContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Input);

export default SecurityQuestionInputContainer;