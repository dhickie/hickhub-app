import { connect } from 'react-redux';
import LoginError from '../../components/login/loginError';

const mapStateToProps = state => {
    return {
        errorMessage: state.login.error
    };
}

const LoginErrorContainer = connect(
    mapStateToProps
)(LoginError);

export default LoginErrorContainer;