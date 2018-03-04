import { 
    ACTIVE_TAB_SET,
    ACTIVE_ACCOUNT_SECTION_SET
} from '../actions/dashboardActions';

export const Tabs = {
    ACCOUNT: 'Account'
};

export const AccountSections = {
    DETAILS: 'Details'
};

const initialState = {
    activeTab: Tabs.ACCOUNT,
    account: {
        activeSection: AccountSections.DETAILS
    }
};

export function dashboard(state = initialState, action) {
    switch (action.type) {
        case ACTIVE_TAB_SET:
            return Object.assign({}, state, { activeTab: action.newValue });
        case ACTIVE_ACCOUNT_SECTION_SET:
            return Object.assign({}, state, { account: { activeSection: action.newValue }});
        default:
            return state;
    }
}