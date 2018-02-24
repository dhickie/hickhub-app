import { Input } from 'semantic-ui-react';
import { RegistrationState } from '../../reducers/registrationReducers';
import { repeatPasswordInputChanged } from '../../actions/registrationActions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        fluid: true,
        type: 'password',
        disabled: false,
        value: state.registration.repeatPassword,
        placeholder: 'Password'
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onChange: (event, data) => {
            dispatch(repeatPasswordInputChanged(event.target.value));
        }
    };
};

const RepeatPasswordInputContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Input);

export default RepeatPasswordInputContainer;