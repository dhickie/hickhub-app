import { Input } from 'semantic-ui-react';
import { RegistrationState } from '../../reducers/registrationReducers';
import { emailInputChanged } from '../../actions/registrationActions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    var isDisabled = state.registration.state == RegistrationState.CHECKING_EMAIL;

    return {
        fluid: true,
        type: 'input',
        disabled: isDisabled,
        value: state.registration.email,
        placeholder: 'Email address'
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onChange: (event, data) => {
            dispatch(emailInputChanged(event.target.value));
        }
    };
};

const EmailInputContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Input);

export default EmailInputContainer;