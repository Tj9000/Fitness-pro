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
        })
    }).catch(e => {
        console.log(e);
        dispatch({ type: types.TRAINING_GETALL_COURSE_LIST_ERROR }); //TODO Handle
    });
}