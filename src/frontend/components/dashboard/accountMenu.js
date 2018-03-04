import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import { AccountSections } from '../../reducers/dashboardReducers';

const accountSections = [
    AccountSections.DETAILS
];

const AccountMenu = props => {
    return (
        <Menu secondary pointing vertical size='mini'>
            {accountSections.map(function(name, index){
                return (
                    <Menu.Item key={index} name={name} active={props.activeSection === name} onClick={props.onClick} />
                )
            })}
        </Menu>
    );
};

AccountMenu.propTypes = {
    activeSection: PropTypes.string,
    onClick: PropTypes.func
};

export default AccountMenu;