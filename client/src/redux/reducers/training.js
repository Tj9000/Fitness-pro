import * as types from '../types';

const initialState = {
    courses: [],
    myCourseList: {},
    selectedCourseExercises: []
};

const training = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGOUT_FINISH:
            return initialState;
            
        case types.TRAINING_GETALL_COURSE_LIST_SUCCESS:
            return { ...state, courses: action.courses || [] };
        case types.TRAINING_GETALL_COURSE_LIST_START:
        case types.TRAINING_GETALL_COURSE_LIST_ERROR:
            return state;

        case types.GET_MYCOURSES_SUCCESS:
            return { ...state, myCourseList: action.courseList };
        case types.GET_MYCOURSES_START:
        case types.GET_MYCOURSES_ERROR:
            return state;

        case types.GET_COURSE_EXERCISES_SUCCESS:
            return { ...state, selectedCourseExercises: action.exercises }
        case types.GET_COURSE_EXERCISES_START:
        case types.GET_COURSE_EXERCISES_ERROR:
            return state;
        default:
            return state;
    }
};

export default training;