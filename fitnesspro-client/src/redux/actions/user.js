import * as types from '../types';

export const fetchUser = username => ({ type: types.FETCH_USER, payload: username });
export const fetchUserFulfilled = payload => ({ type: types.FETCH_USER_FULFILLED, payload });