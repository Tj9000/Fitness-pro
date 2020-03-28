import * as types from '../types';
import { push } from 'connected-react-router';

import { getApiCaller } from '../../utils/apiUtil';
import { getObjectWithKeys } from '../../utils'

export const fetchUser = username => ({ type: types.FETCH_USER, payload: username });
export const fetchUserFulfilled = payload => ({ type: types.FETCH_USER_FULFILLED, payload });

export const getUserDetails = () => (dispatch) => {
    dispatch({ type: types.GET_USER_DETAILS_START });
    getApiCaller().then(apiObj => {
        return apiObj.get('/user/details').then(res => {
            if (res.status == 200 && res.data) {
                dispatch({ type: types.GET_USER_DETAILS_SUCCESS, userDetails: res.data });
            } else {
                dispatch({ type: types.GET_USER_DETAILS_ERROR });
            }
        });
    }).catch(e => {
        console.log(e);
        dispatch({ type: types.GET_USER_DETAILS_ERROR });
    })
}

export const updateUserDetails = (details, redirectSuccess) => (dispatch) => {
    if (!details) {   //Add more validations
        dispatch({ type: types.UPDATE_USER_DETAILS_INP_VAL_ERR });
    }
    else {
        getApiCaller().then(apiObj => {
            return apiObj.post('/user/details', details).then(res => {
                if (!res.data || !Array.isArray(res.data)) {
                    dispatch({ type: types.UPDATE_USER_DETAILS_ERROR }); //TODO Handle
                } else {
                    let updatedDetails = getObjectWithKeys(details, res.data);
                    dispatch({ type: types.UPDATE_USER_DETAILS_SUCCESS, userDetails: updatedDetails }); //TODO Handle un updated details
                    if (redirectSuccess) {
                        dispatch(push(redirectSuccess));
                    }
                }
            })
        }).catch(e => {
            console.log(e);
        })
    }
}

export const updatePhoneNumber = (phoneNumber) => (dispatch) => {
    dispatch({ type: types.UPDATE_USER_PHONENUMBER });
};

export const updateUserImage = (image) => (dispatch) => {
    dispatch({ type: types.UPDATE_USER_PROF_IMG_SUCCESS })
}
export const acceptTermsAndCondition = (image) => (dispatch) => {
    dispatch({ type: types.UPDATE_USER_TANDC_SUCCESS })
}