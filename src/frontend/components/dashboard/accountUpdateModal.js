import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'semantic-ui-react';

const AccountUpdateModal = props => {
    return (
        <Modal trigger={<Button>Update</Button>}>
            <Modal.Header>{props.header}</Modal.Header>
            <Modal.Content>
                {props.content}
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={props.onUpdateClick} loading={props.isUpdating}>Update</Button>
            </Modal.Actions>
        </Modal>
    );
};

AccountUpdateModal.propTypes = {
    header: PropTypes.string,
    content: PropTypes.element,
    onUpdateClick: PropTypes.func,
    isUpdating: PropTypes.bool
};

export default AccountUpdateModal;