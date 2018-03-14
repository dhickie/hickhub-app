import React from 'react';
import PropTypes from 'prop-types';
import AccountUpdateModal from './accountUpdateModal';
import { Modal, Button } from 'semantic-ui-react';

const AccountInfoRow = props => {
    var rowStyle = {
        display: 'flex',
        alignItems: 'center'
    };

    return (
        <div style={rowStyle}>
            <div>
                {props.name}
            </div>
            <div>
                {props.value}
            </div>
            <AccountUpdateModal 
                header={props.modalHeader}
                content={props.modalContent}
                onUpdateClick={props.onModalUpdateClick}
                isUpdating={props.modalIsUpdating}/>
        </div>
    );
};

AccountInfoRow.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    modalHeader: PropTypes.string,
    modalContent: PropTypes.element,
    onModalUpdateClick: PropTypes.func,
    modalIsUpdating: PropTypes.bool
};

export default AccountInfoRow;