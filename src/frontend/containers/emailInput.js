import { emailInputChanged } from '../actions/loginActions';
import { connect } from 'react-redux';
import { LoginState } from '../reducers/loginReducers';
import LoginInput from '../components/loginInput';

const mapStateToProps = state => {
    var isDisabled = state.loginState == LoginState.LOGGING_IN;

    return {
        type: 'input',
        disabled: isDisabled,
        value: state.email,
        placeholder: 'Email address'
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onChange: (newValue) => {
            dispatch(emailInputChanged(newValue));
        }
    };
}

const EmailInputContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginInput);

export default EmailInputContainer;