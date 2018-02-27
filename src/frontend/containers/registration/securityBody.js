import SecurityBody from '../../components/registration/securityBody';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        customSecurityQuestion: state.registration.customSecurityQuestion
    };
};

const SecurityBodyContainer = connect(mapStateToProps)(SecurityBody);

export default SecurityBodyContainer;