import { emailInputChanged } from '../actions/loginActions';
import { connect } from 'react-redux';
import { LoginState } from '../reducers/loginReducers';
import { Input } from 'semantic-ui-react';

const mapStateToProps = state => {
    var login = state.login;
    var isDisabled = login.loginState == LoginState.LOGGING_IN;

    return {
        fluid: true,
        type: 'input',
        disabled: isDisabled,
        value: login.email,
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