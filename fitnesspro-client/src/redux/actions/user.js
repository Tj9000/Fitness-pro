import * as types from '../types';
import { push } from 'connected-react-router';

import { getApiCaller } from '../../utils/apiUtil';
import { getObjectWithKeys } from '../../utils'
import * as _ from 'lodash';

export const fetchUser = username => ({ type: types.FETCH_USER, payload: username });
export const fetchUserFulfilled = payload => ({ type: types.FETCH_USER_FULFILLED, payload });

export const updateUserDetails = (details, redirectSuccess) => (dispatch) => {
    if (!details) {   //Add more validations
        dispatch({ type: types.UPDATE_USER_DETAILS_INP_VAL_ERR });
    }
    else {
        getApiCaller().then(apiObj => {
            return apiObj.post('/user/details', details).then(res => {
                console.log("res", res);
                if (!res.data || !Array.isArray(res.data)) {
                    dispatch({ type: types.UPDATE_USER_DETAILS_ERROR }); //TODO Handle
                } else {
                    let updatedDetails = getObjectWithKeys(details, res.data);
                    dispatch({ type: types.UPDATE_USER_DETAILS_SUCCESS, userDetails: updatedDetails }); //TODO Handle un updated details
                    if(redirectSuccess) {
                        dispatch(push(redirectSuccess));
                    }
                }
            })
        }).catch(e => {
            console.log(e);
        })
    }
}

export const updateUserImage = (image) => (dispatch) => {
    dispatch({ type: types.UPDATE_USER_PROF_IMG_SUCCESS })
}
export const acceptTermsAndCondition = (image) => (dispatch) => {
    dispatch({ type: types.UPDATE_USER_TANDC_SUCCESS })
}