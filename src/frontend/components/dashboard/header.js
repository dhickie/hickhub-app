import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Image } from 'semantic-ui-react';
import { Tabs } from '../../reducers/dashboardReducers';

const tabs = [
    Tabs.ACCOUNT
];

const Header = props => {
    const logoStyle = {
        maxWidth: '150px'
    };

    const displayInline = {
        display: 'inline-block'
    };

    return (
        <div>
            <div style={displayInline}>
                <Image src='/static/logo.jpg' style={logoStyle} fluid centered/>
            </div>
            <div style={displayInline}>
                <Menu secondary pointing>
                    {tabs.map(function(name, index){
                        return (
                            <Menu.Item key={index} name={name} active={props.activeTab === name} onClick={props.onClick} />
                        );
                    })}
                </Menu>
            </div>
        </div>
    );
}

Header.propTypes = {
    activeTab: PropTypes.string,
    onClick: PropTypes.func
};

export default Header;