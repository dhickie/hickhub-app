import React from 'react';
import PropTypes from 'prop-types';
import { Step, Icon } from 'semantic-ui-react';

const Header = props => {
    var titles = [
        'Email',
        'Password',
        'Security Question'
    ];
    var icons = [
        'at',
        'shield',
        'question'
    ];
    var currentStage = props.currentStage;

    return (
        <Step.Group>
            {titles.map(function(name, index){
                var disabled = currentStage < index;
                var active = currentStage == index;
                var completed = currentStage > index;

                return (
                    <Step disabled={disabled} active={active} completed={completed}>
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

Header.PropTypes = {
    currentStage: PropTypes.number
};

export default Header;