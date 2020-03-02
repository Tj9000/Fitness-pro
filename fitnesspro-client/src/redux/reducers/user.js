import * as types from '../types';

const user = (state = {}, action) => {
    switch (action.type) {
        case types.FETCH_USER_FULFILLED:
            return {
                ...state,
            };

        default:
            return state;
    }
};


export default user;