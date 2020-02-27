import * as types from '../types';
import { fetchUser, fetchUserFulfilled } from '../actions/user';
import { ofType } from 'redux-observable';

export const fetchUserEpic = action$ => action$.pipe(
    ofType(types.FETCH_USER)
);