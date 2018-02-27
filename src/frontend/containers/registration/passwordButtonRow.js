import ButtonRow from '../../components/registration/buttonRow';
import { connect } from 'react-redux';
import { passwordComplete } from '../../actions/registrationActions';

const mapStateToProps = state => {
    var nextDisabled = state.registration.password != state.registration.repeatPassword;
    var nextLoading = false;
    var nextContent = 'Next';
    var nextData = [];

    return {
        nextDisabled,
        nextLoading,
        nextContent,
        nextData
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onNextClick: (event, data) => {
            dispatch(passwordComplete());
        }
    };
}

const PasswordButtonRowContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ButtonRow);

export default PasswordButtonRowContainer;