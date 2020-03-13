import * as types from '../types';

const initialState = {

}

const login = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_WITH_PHONE_START:
        case types.LOGIN_WITH_PHONE_SUCCESS:
        case types.LOGIN_WITH_PHONE_ERROR:
            return state;

        case types.LOGIN_WITH_GOOGLE_START:
        case types.LOGIN_WITH_GOOGLE_SUCCESS:
        case types.LOGIN_WITH_GOOGLE_ERROR:
            return state;

        case types.LOGIN_WITH_FACEBOOK_START:
        case types.LOGIN_WITH_FACEBOOK_SUCCESS:
        case types.LOGIN_WITH_FACEBOOK_ERROR:
            return state;

        case types.GET_IDTOKEN_START:
            return state;
        case types.GET_IDTOKEN_SUCCESS:
            return { ...state, tokenId: action.tokenId };
        case types.GET_IDTOKEN_ERROR:
            return state;
        
        
            default:
            return state;
    }
}

export default login;