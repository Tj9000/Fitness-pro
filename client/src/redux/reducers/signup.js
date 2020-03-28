import * as types from '../types';

const initialState = {
    profileSignupComplete: false,
    profileSignupStep: 1
}
const signup = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGOUT_FINISH:
            return initialState;

        case types.LOGIN_WITH_GOOGLE_SUCCESS:
        case types.CHECK_USER_SIGNEDIN_SUCCESS:
            return { ...state, currentUser: action.currentUser }
        case types.FETCH_CHECKADDUSER_SUCCESS:
            return {
                ...state,
                profileSignupComplete: action.userDetails.profileSignupComplete
            };
        case types.UPDATE_USER_DETAILS_SUCCESS:
        case types.UPDATE_USER_PHONENUMBER:
            return {
                ...state,
                profileSignupStep: 2
            }
        case types.UPDATE_USER_TANDC_SUCCESS:
            return {
                ...state,
                profileSignupStep: -1,
                profileSignupComplete: true
            }
        default:
            return state;
    }
};

export default signup;