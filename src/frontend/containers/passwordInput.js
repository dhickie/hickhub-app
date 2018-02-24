import { passwordInputChanged } from '../actions/loginActions';
import { connect } from 'react-redux';
import { LoginState } from '../reducers/loginReducers';
import { Input } from 'semantic-ui-react';

const mapStateToProps = state => {
    var isDisabled = state.loginState == LoginState.LOGGING_IN;

    return {
        fluid: true,
        type: 'password',
        disabled: isDisabled,
        value: state.password,
        placeholder: 'Password'
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onChange: (event, data) => {
            dispatch(passwordInputChanged(event.target.value))
        }
    };
};

const PasswordInputContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Input);

export default PasswordInputContainer;