import { passwordInputChanged } from '../actions/loginActions';
import { connect } from 'react-redux';
import { LoginState } from '../reducers/loginReducers';
import HickHubInputInput from '../components/common/hickHubInput';

const mapStateToProps = state => {
    var isDisabled = state.loginState == LoginState.LOGGING_IN;

    return {
        type: 'password',
        disabled: isDisabled,
        value: state.password,
        placeholder: 'Password'
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onChange: (newValue) => {
            dispatch(passwordInputChanged(newValue))
        }
    };
};

const PasswordInputContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HickHubInputInput);

export default PasswordInputContainer;