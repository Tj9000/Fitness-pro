import * as types from '../types';

import { getApiCaller } from '../../utils/apiUtil';


export const sendFeedBack = (feedbackDetails) => (dispatch) => {
    if (!feedbackDetails) {   //Add more validations
        dispatch({ type: types.FEEDBACK_FAIL });
    }
    else {
        dispatch({ type: types.FEEDBACK_START })
        getApiCaller().then(apiObj => {
            return apiObj.post('/feedback', feedbackDetails).then(res => {
                dispatch({ type: types.FEEDBACK_SUCCESS }); //TODO Handle un updated details

            })
        }).catch(e => {
            dispatch({ type: types.FEEDBACK_FAIL }); //TODO Handle
            console.log(e);
        })
    }
}