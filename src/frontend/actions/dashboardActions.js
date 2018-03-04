export const ACTIVE_TAB_SET = 'ACTIVE_TAB_SET';
export const ACTIVE_ACCOUNT_SECTION_SET = 'ACTIVE_ACCOUNT_SECTION_SET';

// Sync action creators
export function activeTabSet(newValue) {
    return { type: ACTIVE_TAB_SET, newValue };
}

export function activeAccountSectionSet(newValue) {
    return { type: ACTIVE_ACCOUNT_SECTION_SET, newValue };
}