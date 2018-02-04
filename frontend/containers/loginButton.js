import {startLogin} from '../actions/loginActions';
import {connect} from 'react-redux';
import LoginButton from '../components/loginButton';

const mapStateToProps = state => {
    return {
        loginState: state.loginState,
        email: state.email,
        password: state.password,
        clientId: state.clientId,
        scope: state.scope,
        redirectUri: state.redirectUri
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onClick: (email, password, clientId, scope, redirectUri) => {
            dispatch(startLogin(email, password, clientId, scope, redirectUri));
        }
    };
};

const LoginButtonContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginButton);

export default LoginButtonContainer;