import React from 'react';
import PropTypes from 'prop-types';
import RegistrationWindowContainer from '../containers/registration/registrationWindow';
import LoginWindow from '../components/login/loginWindow';
import { AppState } from '../reducers/appReducers';

const App = props => {
    var screen;
    if (props.state === AppState.LOGIN) {
        screen = <LoginWindow />;
    } else if (props.state === AppState.REGISTRATION) {
        screen = <RegistrationWindowContainer />;
    }

    return screen;
};

App.propTypes = {
    state: PropTypes.string
};

export default App;