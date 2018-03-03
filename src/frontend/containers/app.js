import App from '../components/app';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        state: state.app.appState
    };
}

const AppContainer = connect(
    mapStateToProps
)(App);

export default AppContainer;