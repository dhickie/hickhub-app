import Header from '../../components/dashboard/header';
import { connect } from 'react-redux';
import { activeTabSet } from '../../actions/dashboardActions';

const mapStateToProps = state => {
    return {
        activeTab: state.dashboard.activeTab
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onClick: (event, {name}) => {
            dispatch(activeTabSet(name));
        }
    };
};

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default HeaderContainer;