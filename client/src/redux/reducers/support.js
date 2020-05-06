import * as types from '../types';


const support = (state = {}, action) => {
    switch (action.type) {

        case types.FEEDBACK_START:
            return {
                ...state, feedbackPosted: false, feedbackFailed: false
            }
        case types.FEEDBACK_SUCCESS:
            return {
                ...state, feedbackPosted: true, feedbackFailed: false
            }
        case types.FEEDBACK_FAIL:
            console.log("feedback failed");
            return {
                ...state, feedbackFailed: true, feedbackPosted: false
            }
        default:
            return state;
    }
};

export default support;
