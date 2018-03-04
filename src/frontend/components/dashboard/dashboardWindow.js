import React from 'react';
import HeaderContainer from '../../containers/dashboard/header';
import WindowBodyContainer from '../../containers/dashboard/windowBody'

const DashboardWindow = props => {
    return (
        <div>
            <HeaderContainer />
            <WindowBodyContainer />
        </div>
    );
};

export default DashboardWindow;