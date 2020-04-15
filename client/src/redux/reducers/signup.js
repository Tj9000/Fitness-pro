import * as types from '../types';

const initialState = {
    profileSignupComplete: false,
    profileSignupStep: 1,
    verifyPhoneError: null
}
const signup = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGOUT_FINISH:
            return initialState;

        case types.LOGIN_WITH_GOOGLE_SUCCESS:
        case types.CHECK_USER_SIGNEDIN_SUCCESS:
            let phoneNumber = action.currentUser && action.currentUser.phoneNumber;
            return { ...state, currentUser: action.currentUser, profileSignupStep: phoneNumber ? 2 : state.profileSignupStep };
        case types.FETCH_CHECKADDUSER_SUCCESS:
            return {
                ...state,
                profileSignupComplete: action.userDetails.profileSignupComplete
            };

        case types.GET_PHONEOTP_SUCCESS:
        case types.GET_PHONEOTP_START:
        case types.VERIFY_PHONEOTP_START:
            return { ...state, verifyPhoneError: null };

        case types.VERIFY_PHONEOTP_ERROR:
            return { ...state, verifyPhoneError: action.error };
        case types.VERIFY_PHONEOTP_SUCCESS:
            return {
                ...state,
                phoneOTPVerified: true,
                verifyPhoneError: null,
                profileSignupStep: 2
            };
        case types.UPDATE_USER_TANDC_SUCCESS:
            return {
                ...state,
                profileSignupStep: -1,
                profileSignupComplete: true
            };
        default:
            return state;
    }
};

export default signup;