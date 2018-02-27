import { startLogin } from '../actions/loginActions';
import { connect } from 'react-redux';
import LoginButton from '../components/loginButton';

const mapStateToProps = state => {
    var login = state.login;
    return {
        loginState: login.loginState,
        email: login.email,
        password: login.password,
        clientId: login.clientId,
        scope: login.scope,
        redirectUri: login.redirectUri
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