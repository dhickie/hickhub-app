import { connect } from 'react-redux';
import LoginError from '../components/loginError';

const mapStateToProps = state => {
    return {
        errorMessage: state.error
    };
}

const LoginErrorContainer = connect(
    mapStateToProps
)(LoginError);

export default LoginErrorContainer;