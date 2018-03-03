import { passwordInputChanged } from '../../actions/loginActions';
import { connect } from 'react-redux';
import { LoginState } from '../../reducers/loginReducers';
import { Input } from 'semantic-ui-react';

const mapStateToProps = state => {
    var login = state.login;
    var isDisabled = login.loginState == LoginState.LOGGING_IN;

    return {
        fluid: true,
        type: 'password',
        disabled: isDisabled,
        value: login.password,
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