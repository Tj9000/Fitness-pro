import * as types from '../types';
import { push } from 'connected-react-router';
import store, { history } from '../../redux/store';

import { FireBase, googleAuthProvider, PhoneAuthApplicationVerifier, getCurrentUser } from '../../firebase/firebase';
import { getUserDetails } from './user';
import { showSignupModal } from './modal';

import * as firebase from 'firebase/app';

import { getApiCaller } from '../../utils/apiUtil';
import * as _ from 'lodash';

export const loginUserWithPhoneNumber = (phoneNumber, signinButtonId) => (dispatch) => {
    dispatch({ type: types.LOGIN_WITH_PHONE_START });
    let verifier = new firebase.auth.RecaptchaVerifier(signinButtonId, {
        'size': 'invisible',
        'callback': (e) => {
            //success Callback
        },
        'expired-callback': function () {
            // Response expired. Ask user to solve reCAPTCHA again.
            // ...
        }
    });
    if (phoneNumber && validatePhoneNumber(phoneNumber)) {
        FireBase.auth().signInWithPhoneNumber("+91" + phoneNumber, verifier).then(confirmationVerifier => {
            console.log(confirmationVerifier);
            var code = window.prompt('Provide your SMS OTP code');
            confirmationVerifier.confirm(code).then((userObject) => {
                if (!userObject || !userObject.user) {
                    FireBase.auth().signOut().then(res => {
                        alert("Something went wrong. Please Sign in again.");
                        dispatch({ type: types.LOGIN_WITH_PHONE_ERROR, error: { code: 'NoUserObject', message: "No user object found" } });
                    });
                } else if (!userObject.user.email) {
                    FireBase.auth().currentUser.delete().then(res => {
                        // User deleted.
                        console.log("user Deleted.", res);
                        FireBase.auth().signOut().then(res => {
                            alert("Please Signup with Google or Facebook to continue");
                            dispatch(showSignupModal());
                            dispatch({ type: types.LOGIN_WITH_PHONE_ERROR, error: { code: 'SignupRequired', message: "Please Signup to continue" } });
                        });
                    });
                } else {
                    dispatch({ type: types.LOGIN_WITH_PHONE_SUCCESS, currentUser: userObject.user });
                    dispatch(checkAndGetUserData());
                }
            }).catch(e => {
                console.log(e);
                alert("Login Failed. Try again.");
                dispatch({ type: types.LOGIN_WITH_PHONE_ERROR, error: { code: e && e.code, message: e && e.message } });
            });

            // dispatch(genrateIdToken());
        }).catch((err) => {
            //TODO: Handle this
            console.log("err", err);
            dispatch({ type: types.LOGIN_WITH_PHONE_ERROR, error: { code: err && err.code, message: err && err.message } });
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
        if (currentUser) {
            dispatch(getUserDetails());
        }
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

export const getOTPForPhoneNumber = (phoneNumber, verifierId) => (dispatch) => {
    dispatch({ type: types.GET_PHONEOTP_START });
    let verifier = new firebase.auth.RecaptchaVerifier(verifierId, {
        'size': 'normal',
        'callback': (e) => {
            document.getElementById(verifierId).style.display = 'none';
        },
        'expired-callback': function () {
            // Response expired. Ask user to solve reCAPTCHA again.
            // ...
        }
    });
    FireBase.auth().currentUser.linkWithPhoneNumber("+91" + phoneNumber, verifier).then(res => {
        dispatch({ type: types.GET_PHONEOTP_SUCCESS, payload: res });
    }).catch(e => {
        //TODO: Handle errors
        console.log(e);
        dispatch({ type: types.GET_PHONEOTP_ERROR });
    });
};

export const validateOTP = (phoneNumber, OTP) => (dispatch) => {
    dispatch({ type: types.VERIFY_PHONEOTP_START });
    let state = store.getState();
    if (state.login.confirmationVerifier) {
        state.login.confirmationVerifier.confirm(OTP).then((r) => {
            dispatch({ type: types.VERIFY_PHONEOTP_SUCCESS });
        }).catch(e => {
            console.log(e);
            dispatch({ type: types.VERIFY_PHONEOTP_ERROR, error: { code: e && e.code, message: e && e.message } });
        });
    } else {
        dispatch({ type: types.VERIFY_PHONEOTP_ERROR, error: { code: "no-confirmer", message: "Please retry the entering Phone Number" } });
    }
};

function resetRoute() {
    history.replace('/');
}
function validatePhoneNumber(email) {
    return email !== null;
}