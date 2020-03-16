import * as types from '../types';
import { MODALSCREEN } from '../../config/modal';

const initialState = {
    showModal: null
};

const modal = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_MODAL_SHOW: return { ...state, showModal: MODALSCREEN.LOGIN };
        case types.LOGIN_MODAL_HIDE: return { ...state, showModal: null };

        case types.LOGIN_WITH_GOOGLE_START:
            return { ...state, showModal: MODALSCREEN.LOADING };

        case types.LOGIN_WITH_PHONE_SUCCESS:
        case types.LOGIN_WITH_GOOGLE_SUCCESS:
        case types.LOGIN_WITH_FACEBOOK_SUCCESS:
            return { ...state, showModal: MODALSCREEN.LOADING };
        
        case types.FETCH_CHECKADDUSER_SUCCESS:
            return { ...state, showModal: null };
        
        default:
            return state;
    }
};

export default modal;