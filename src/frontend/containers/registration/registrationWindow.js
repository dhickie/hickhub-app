import RegistrationWindow from '../../components/registration/registrationWindow';
import { connect } from 'react-redux';
import { RegistrationState } from '../../reducers/registrationReducers';

const mapStateToProps = state => {
    return {
        registrationState: state.registration.state
    };
};

const RegistrationWindowContainer = connect(
    mapStateToProps
)(RegistrationWindow);

export default RegistrationWindowContainer;