import * as types from '../types';

import { getApiCaller } from '../../utils/apiUtil';

export const getAllCoursesList = () => (dispatch) => {
    dispatch({ type: types.TRAINING_GETALL_COURSE_LIST_START });
    getApiCaller().then(apiObj => {
        return apiObj.get('/course/all').then(res => {
            if (!res.data || !Array.isArray(res.data)) {
                dispatch({ type: types.TRAINING_GETALL_COURSE_LIST_ERROR }); //TODO Handle
            } else {
                dispatch({ type: types.TRAINING_GETALL_COURSE_LIST_SUCCESS, courses: res.data });
            }
        });
    }).catch(e => {
        console.log(e);
        dispatch({ type: types.TRAINING_GETALL_COURSE_LIST_ERROR }); //TODO Handle
    });
}


export const getMyCoursesList = () => (dispatch) => {
    dispatch({ type: types.GET_MYCOURSES_START });
    getApiCaller().then(apiObj => {
        return apiObj.get('/course/mycourses').then(res => {
            if (!res.data) {
                dispatch({ type: types.GET_MYCOURSES_ERROR }); //TODO Handle
            } else {
                dispatch({ type: types.GET_MYCOURSES_SUCCESS, courseList: res.data })
            }
        });
    }).catch(e => {
        console.log(e);
        dispatch({ type: types.GET_MYCOURSES_ERROR }); //TODO Handle
    })
}

export const getExercises = (courseId) => (dispatch) => {
    dispatch({ type: types.GET_COURSE_EXERCISES_START });
    getApiCaller().then(apiObj => {
        return apiObj.get(`/course/getnexttrainings/${courseId}`).then(res => {
            dispatch({ type: types.GET_COURSE_EXERCISES_SUCCESS, exercise: res.data });
        });
    }).catch(e => {
        console.log(e);
        dispatch({ type: types.GET_COURSE_EXERCISES_ERROR, error: "Could not get Exercise."});
    });
}

export const getCourseDetail = (courseId) => (dispatch) => {
    dispatch({ type: types.GET_COURSE_DETAILS_START, courseId });
    getApiCaller().then(apiObj => {
        return apiObj.get(`/course/details/${courseId}`).then(res => {
            if (!res.data) {
                dispatch({ type: types.GET_COURSE_DETAILS_ERROR, courseId }); //TODO Handle
            } else {
                dispatch({ type: types.GET_COURSE_DETAILS_SUCCESS, details: res.data });
            }
        });
    }).catch(e => {
        console.log(e);
        dispatch({ type: types.GET_COURSE_DETAILS_ERROR, courseId }); //TODO Handle
    });
}