import * as types from '../types';
import { push } from 'connected-react-router';
import { history } from '../../redux/store';

import { FireBase, googleAuthProvider, PhoneAuthApplicationVerifier, getCurrentUser } from '../../firebase/firebase';
import * as firebase from 'firebase/app';

import { getApiCaller } from '../../utils/apiUtil';
import * as _ from 'lodash';

export const loginUserWithPhoneNumber = phoneNumber => (dispatch) => {
    if (phoneNumber && validatePhoneNumber(phoneNumber)) {
        FireBase.auth().signInWithPhoneNumber(phoneNumber, PhoneAuthApplicationVerifier).then(res => {
            //TODO
            dispatch(genrateIdToken());
        }).catch((err) => {
            console.log("err", err)
        });
    }
};

export const loginUserWithGoogle = () => (dispatch) => {
    dispatch({ type: types.LOGIN_WITH_GOOGLE_START });
    FireBase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
        return FireBase.auth().signInWithPopup(googleAuthProvider);
    }).then(async (res) => {
        if (res.user) {
            dispatch({ type: types.LOGIN_WITH_GOOGLE_SUCCESS, currentUser: res.user });  //TODO Handle
        } else {
            throw new Error("Something went wrong while signing");
        }
        try {
            let token = await dispatch(genrateIdToken());
            if (token) {
                dispatch(checkAndGetUserData(token));
            }
        } catch (e) {
            throw e;
        }
    }).catch(err => {
        console.log(err);
        dispatch({ type: types.LOGIN_WITH_GOOGLE_ERROR, error: err });  //TODO Handle
    });
};

export const genrateIdToken = () => (dispatch) => {
    dispatch({ type: types.GET_IDTOKEN_START });
    return FireBase.auth().currentUser.getIdTokenResult(/* forceRefresh */ false).then((tokenId) => {
        console.log("idtoken", tokenId);
        dispatch({ type: types.GET_IDTOKEN_SUCCESS, tokenId: tokenId });
        return tokenId;
    }).catch(err => {
        // Handle error
        console.log(err);
        dispatch({ type: types.GET_IDTOKEN_ERROR });  //TODO Handle
        return Promise.reject(err);
    });
}

const checkAndGetUserData = () => (dispatch) => {
    getApiCaller().then(apiObj => {
        return apiObj.get('/user/checkandadd').then(res => {
            console.log("res", res);
            if (!res.data || !_.size(res.data)) {
                dispatch({ type: types.FETCH_CHECKADDUSER_ERROR }); //TODO Handle
            } else {
                dispatch({ type: types.FETCH_CHECKADDUSER_SUCCESS, userDetails: res.data }); //TODO Handle
                if (!res.data.profileSignupComplete) {
                    dispatch(push('/signup'));
                }
                else {
                    dispatch(push('/homepage'));
                }
            }
        })
    }).catch(e => {
        console.log(e);
    })
};

export const checkUserSignedIn = () => (dispatch) => {
    dispatch({ type: types.CHECK_USER_SIGNEDIN_START });
    getCurrentUser().then(currentUser => {
        dispatch({ type: types.CHECK_USER_SIGNEDIN_SUCCESS, currentUser: currentUser });
    }).catch(e => {
        dispatch({ type: types.CHECK_USER_SIGNEDIN_ERROR });
    });
}

export const logout = () => (dispatch) => {
    dispatch({ type: types.LOGOUT_START });
    FireBase.auth().signOut().then(res => {
        console.log(res);
        setTimeout(() => {
            dispatch({ type: types.LOGOUT_FINISH });
            setTimeout(() => {
                resetRoute();
            }, 100);
        }, 1000);
    });
}

function resetRoute() {
    history.replace('/');
}
function validatePhoneNumber(email) {
    return email !== null;
}