import WindowBody from '../../components/dashboard/windowBody';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        activeTab: state.dashboard.activeTab
    };
}

const WindowBodyContainer = connect(
    mapStateToProps
)(WindowBody);

export default WindowBodyContainer;