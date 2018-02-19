import Header from '../../components/registration/header';
import { connect } from 'react-redux';
import { RegistrationState } from '../../reducers/registrationReducers';

const mapStateToProps = state => {
    var currentStage = 0;
    switch (state.registration.state) {
        case RegistrationState.AWAITING_EMAIL:
        case RegistrationState.CHECKING_EMAIL:
            currentStage = 0;
            break;
        case RegistrationState.AWAITING_PASSWORD:
            currentStage = 1;
            break;
        case RegistrationState.AWAITING_SECURITY:
            currentStage = 2;
            break;
        case RegistrationState.REGISTERING:
            currentStage = 3;
            break;
    }

    return {
        currentStage: currentStage
    };
};

const HeaderContainer = connect(
    mapStateToProps
)(Header);

export default HeaderContainer;