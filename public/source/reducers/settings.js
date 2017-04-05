const defaultState = {
    reportInfo: {},
};

/*
 * State argument object contains new state values
 * Actions argument object contains a type and a payload
 * Note: this can alternately be setup as a giant object with
 * methods who's keys are equivalent the action.type
 * export default function settingsReducer(state=defaultState, action) {
 */
export default function settingsReducer(state = defaultState, action) {
    switch (action.type) {
    case 'SAVE_REPORT': {
        return {
            ...state,
            reportInfo: action.payload,
        };
    }
    default: {
        return state;
    }
    }
}
