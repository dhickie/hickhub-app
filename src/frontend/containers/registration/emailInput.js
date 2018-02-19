import HickHubInput from '../../components/common/hickHubInput';
import { RegistrationState } from '../../reducers/registrationReducers';
import { emailInputChanged } from '../../actions/registrationActions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    var isDisabled = state.registration.state == RegistrationState.CHECKING_EMAIL;

    return {
        type: 'input',
        disabled: isDisabled,
        value: state.registration.email,
        placeholder: 'Email address'
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onChange: (newValue) => {
            dispatch(emailInputChanged(newValue));
        }
    };
};

const EmailInputContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HickHubInput);

export default EmailInputContainer;