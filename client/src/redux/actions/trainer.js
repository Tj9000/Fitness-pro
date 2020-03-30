import * as types from '../types';

import { getApiCaller } from '../../utils/apiUtil';
import * as _ from 'lodash';

export const getStarTrainers = () => (dispatch) => {
    dispatch({ type: types.GET_STAR_TRAINERS_START });
    getApiCaller().then(apiObj => {
        return apiObj.get('/trainer/all').then(res => {
            if (!res.data || !Array.isArray(res.data)) {
                dispatch({ type: types.GET_STAR_TRAINERS_ERROR }); //TODO Handle
            } else {
                dispatch({ type: types.GET_STAR_TRAINERS_SUCCESS, starTrainers: _.sampleSize(res.data, 4) });
            }
        })
    }).catch(e => {
        console.log(e);
        dispatch({ type: types.GET_STAR_TRAINERS_ERROR }); //TODO Handle
    });
}

export const getFeaturedTrainers = () => (dispatch) => {
    dispatch({ type: types.GET_FEATURED_TRAINERS_START });
    getApiCaller().then(apiObj => {
        return apiObj.get('/trainer/all').then(res => {
            if (!res.data || !Array.isArray(res.data)) {
                dispatch({ type: types.GET_FEATURED_TRAINERS_ERROR }); //TODO Handle
            } else {
                dispatch({ type: types.GET_FEATURED_TRAINERS_SUCCESS, featuredTrainers: _.sampleSize(res.data, 4) });
            }
        })
    }).catch(e => {
        console.log(e);
        dispatch({ type: types.GET_FEATURED_TRAINERS_ERROR }); //TODO Handle
    });
}

export const getTrainerOfTheWeek= () => (dispatch) => {
    dispatch({ type: types.GET_TRAINER_OFTHE_WEEK_START });
    getApiCaller().then(apiObj => {
        return apiObj.get('/trainer/all').then(res => {
            if (!res.data || !Array.isArray(res.data)) {
                dispatch({ type: types.GET_TRAINER_OFTHE_WEEK_ERROR }); //TODO Handle
            } else {
                dispatch({ type: types.GET_TRAINER_OFTHE_WEEK_SUCCESS, trainerOfTheWeek: _.sample(res.data) });
            }
        })
    }).catch(e => {
        console.log(e);
        dispatch({ type: types.GET_TRAINER_OFTHE_WEEK_ERROR }); //TODO Handle
    });
}