import { Input } from 'semantic-ui-react';
import { RegistrationState } from '../../reducers/registrationReducers';
import { passwordInputChanged } from '../../actions/registrationActions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        fluid: true,
        type: 'password',
        disabled: false,
        value: state.registration.password,
        placeholder: 'Password'
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onChange: (event, data) => {
            dispatch(passwordInputChanged(event.target.value));
        }
    };
};

const PasswordInputContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Input);

export default PasswordInputContainer;