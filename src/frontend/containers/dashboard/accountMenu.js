import AccountMenu from '../../components/dashboard/accountMenu';
import { connect } from 'react-redux';
import { activeAccountSectionSet } from '../../actions/dashboardActions';

const mapStateToProps = state => {
    return {
        activeSection: state.dashboard.account.activeSection
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onClick: (event, {name}) => {
            dispatch(activeAccountSectionSet(name));
        }
    };
};

const AccountMenuContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountMenu);

export default AccountMenuContainer;