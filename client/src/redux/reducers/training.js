import * as types from '../types';

const initialState = {
    courses: []
};

const training = (state = initialState, action) => {
    switch (action.type) {
        case types.TRAINING_GETALL_COURSE_LIST_SUCCESS:
            return { ...state, courses: action.courses || [] };
        case types.TRAINING_GETALL_COURSE_LIST_START:
        case types.TRAINING_GETALL_COURSE_LIST_ERROR:
        default:
            return state;
    }
};

export default training;