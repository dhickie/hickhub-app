import { emailInputChanged } from '../actions/loginActions';
import { connect } from 'react-redux';
import { LoginState } from '../reducers/loginReducers';
import { Input } from 'semantic-ui-react';

const mapStateToProps = state => {
    var isDisabled = state.loginState == LoginState.LOGGING_IN;

    return {
        fluid: true,
        type: 'input',
        disabled: isDisabled,
        value: state.email,
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