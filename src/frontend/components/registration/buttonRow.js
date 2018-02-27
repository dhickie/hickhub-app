import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid } from 'semantic-ui-react';

const ButtonRow = props => {
    var backButton = <div/>;
    if (props.backEnabled) {
        backButton = (
            <Button fluid onClick={props.onBackClick}>
                {props.backContent}
            </Button>
        );
    }

    return (
        <Grid>
            <Grid.Row columns={3}>
                <Grid.Column>
                    {backButton}
                </Grid.Column>
                <Grid.Column/>
                <Grid.Column>
                    <Button 
                        fluid 
                        onClick={props.onNextClick} 
                        loading={props.nextLoading} 
                        disabled={props.nextDisabled}
                        sectionvalues={props.nextData}>
                        {props.nextContent}
                    </Button>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

ButtonRow.propTypes = {
    backEnabled: PropTypes.bool,
    backContent: PropTypes.string,
    onBackClick: PropTypes.func,
    nextLoading: PropTypes.bool,
    nextDisabled: PropTypes.bool,
    nextContent: PropTypes.string,
    onNextClick: PropTypes.func,
    nextData: PropTypes.arrayOf(PropTypes.string)
};

export default ButtonRow;
