import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Image } from 'semantic-ui-react';
import { Tabs } from '../../reducers/dashboardReducers';

const tabs = [
    Tabs.ACCOUNT
];

const Header = props => {
    const logoStyle = {
        maxWidth: '134px'
    };

    const rowStyle = {
        display: 'flex',
        alignItems: 'center'
    }

    return (
        <div style={rowStyle}>
            <Image src='/static/logo.jpg' style={logoStyle}/>
            <Menu secondary pointing>
                {tabs.map(function(name, index){
                    return (
                        <Menu.Item key={index} name={name} active={props.activeTab === name} onClick={props.onClick} />
                    );
                })}
            </Menu>
        </div>
    );
}

Header.propTypes = {
    activeTab: PropTypes.string,
    onClick: PropTypes.func
};

export default Header;