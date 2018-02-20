import HickHubInput from '../../components/common/hickHubInput';
import { RegistrationState } from '../../reducers/registrationReducers';
import { passwordInputChanged } from '../../actions/registrationActions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        type: 'password',
        disabled: false,
        value: state.registration.password,
        placeholder: 'Password'
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onChange: (newValue) => {
            dispatch(passwordInputChanged(newValue));
        }
    };
};

const PasswordInputContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HickHubInput);

export default PasswordInputContainer;