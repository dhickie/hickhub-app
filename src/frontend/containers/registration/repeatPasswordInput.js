import HickHubInput from '../../components/common/hickHubInput';
import { RegistrationState } from '../../reducers/registrationReducers';
import { repeatPasswordInputChanged } from '../../actions/registrationActions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        type: 'password',
        disabled: false,
        value: state.registration.repeatPassword,
        placeholder: 'Password'
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onChange: (newValue) => {
            dispatch(repeatPasswordInputChanged(newValue));
        }
    };
};

const RepeatPasswordInputContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HickHubInput);

export default RepeatPasswordInputContainer;