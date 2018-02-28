import ButtonRow from '../../components/registration/buttonRow';
import { connect } from 'react-redux';
import { passwordComplete } from '../../actions/registrationActions';
import { passwordBackClicked } from '../../actions/registrationActions';
import { validatePassword, validateRepeatPassword } from '../../validators/registration';

const mapStateToProps = state => {
    var password = state.registration.password;
    var repeatPassword = state.registration.repeatPassword;

    var nextDisabled = !validatePassword(password) || !validateRepeatPassword(password, repeatPassword);
    var nextLoading = false;
    var nextContent = 'Next';
    var nextData = [];
    var backEnabled = true;
    var backContent = 'Back';

    return {
        nextDisabled,
        nextLoading,
        nextContent,
        nextData,
        backEnabled,
        backContent
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onNextClick: (event, data) => {
            dispatch(passwordComplete());
        },
        onBackClick: (event, data) => {
            dispatch(passwordBackClicked());
        }
    };
}

const PasswordButtonRowContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ButtonRow);

export default PasswordButtonRowContainer;