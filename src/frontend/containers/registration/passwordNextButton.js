import NextButton from '../../components/registration/nextButton';
import { connect } from 'react-redux';
import { passwordComplete } from '../../actions/registrationActions';

const mapStateToProps = state => {
    var isDisabled = state.registration.password != state.registration.repeatPassword;
    var isLoading = false;
    var sectionValues = [state.registration.password];

    return {
        isDisabled,
        isLoading,
        sectionValues
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: (sectionValues) => {
            dispatch(passwordComplete());
        }
    };
}

const PasswordNextButtonContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NextButton);

export default PasswordNextButtonContainer;