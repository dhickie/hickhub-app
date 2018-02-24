import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
import { securityQuestionSelected } from '../../actions/registrationActions';
import { SecurityQuestions } from '../../reducers/registrationReducers';

const mapStateToProps = state => {
    var options = SecurityQuestions.map(function(value, index) {
        return {
            text: value,
            value: index
        }
    });

    return {
        fluid: true,
        selection: true,
        placeholder: 'Select a security question',
        options: options
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onChange: (event, data) => {
            // Dispatch an event detailing what has been selected from the dropdown
            dispatch(securityQuestionSelected(data.value));
        }
    };
}

const SecurityDropdownContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dropdown);

export default SecurityDropdownContainer;