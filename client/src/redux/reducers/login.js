import * as types from '../types';

const initialState = {
    checkingLogin: true,
    signedIn: null,
    currentUser: null,
    getOTPTriggered: false,
}

const login = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGOUT_FINISH:
            return initialState;

        case types.LOGIN_WITH_PHONE_START:
        case types.LOGIN_WITH_PHONE_SUCCESS:
        case types.LOGIN_WITH_PHONE_ERROR:
            return state;

        case types.GET_PHONEOTP_SUCCESS:
            return { ...state, getOTPTriggered: true, confirmationVerifier: action.payload };
        case types.GET_PHONEOTP_START:
            return { ...state, getOTPTriggered: false };
        case types.GET_PHONEOTP_ERROR:
            return { ...state, getOTPTriggered: false };

        case types.VERIFY_PHONEOTP_SUCCESS:
            return { ...state, phoneOTPVerified: true };
        case types.VERIFY_PHONEOTP_START:
            return { ...state, phoneOTPVerified: false };
        case types.VERIFY_PHONEOTP_ERROR:
            return { ...state, phoneOTPVerified: false };

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

        case types.CHECK_USER_SIGNEDIN_START:
            return { ...state, checkingLogin: true }
        case types.CHECK_USER_SIGNEDIN_SUCCESS:
            return { ...state, checkingLogin: false, signedIn: !!action.currentUser, currentUser: action.currentUser };
        case types.CHECK_USER_SIGNEDIN_ERROR:
            return { ...state, checkingLogin: false, signedIn: false, currentUser: action.currentUser };


        default:
            return state;
    }
}

export default login;