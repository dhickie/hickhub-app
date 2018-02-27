import React from 'react';
import PropTypes from 'prop-types';
import { Step, Icon } from 'semantic-ui-react';

const Header = props => {
    var titles = [
        'Email',
        'Password',
        'Security'
    ];
    var icons = [
        'at',
        'shield',
        'question'
    ];
    var currentStage = props.currentStage;

    return (
        <Step.Group widths={3}>
            {titles.map(function(name, index){
                var disabled = currentStage < index;
                var active = currentStage == index;
                var completed = currentStage > index;

                return (
                    <Step key={index} disabled={disabled} active={active} completed={completed}>
                        <Icon name={icons[index]}/>
                        <Step.Content>
                            <Step.Title>{titles[index]}</Step.Title>
                        </Step.Content>
                    </Step>
                );
            })}
        </Step.Group>
    );
};

Header.propTypes = {
    currentStage: PropTypes.number
};

export default Header;