import { Input } from 'semantic-ui-react';
import { RegistrationState } from '../../reducers/registrationReducers';
import { securityAnswerInputChanged } from '../../actions/registrationActions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        fluid: true,
        type: 'input',
        value: state.registration.securityAnswer,
        placeholder: 'Security answer'
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onChange: (event, data) => {
            dispatch(securityAnswerInputChanged(event.target.value));
        }
    };
};

const SecurityAnswerInputContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Input);

export default SecurityAnswerInputContainer;