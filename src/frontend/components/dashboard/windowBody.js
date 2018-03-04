import React from 'react';
import PropTypes from 'prop-types';
import AccountMenuContainer from '../../containers/dashboard/accountMenu';
import { Tabs } from '../../reducers/dashboardReducers';

const WindowBody = props => {
    var menu;
    if (props.activeTab == Tabs.ACCOUNT) {
        menu = <AccountMenuContainer />
    }

    return menu;
}

WindowBody.propTypes = {
    activeTab: PropTypes.string
};

export default WindowBody;