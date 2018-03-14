import React from 'react';
import PropTypes from 'prop-types';
import AccountInfoRow from './accountInfoRow';

const AccountBody = props => {
    // Return an account info update row for each property that can be updated
    return (
        <div>
            <AccountInfoRow
                name='Email address'
                value={props.email}
                modalHeader='Update your email address' />
        </div>
    );
}