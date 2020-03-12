import * as types from '../types';
import { push } from 'connected-react-router';

import { FireBase, googleAuthProvider, PhoneAuthApplicationVerifier } from '../../firebase/firebase'

export const loginUserWithPhoneNumber = phoneNumber => (dispatch) => {
    if (phoneNumber && validatePhoneNumber(phoneNumber)) {
        FireBase.auth().signInWithPhoneNumber(phoneNumber, PhoneAuthApplicationVerifier).then(res => {
          //TODO
        }).catch((err) => {
            console.log("err", err)
        });
    }
};

export const loginUserWithGoogle = () => (dispatch) => {
    FireBase.auth().signInWithPopup(googleAuthProvider).then(res => {
        FireBase.auth().currentUser.getIdTokenResult(/* forceRefresh */ true).then((idToken) => {
            console.log("idtoken", idToken)
        }).catch(function (error) {
            // Handle error
            console.log(error)
        });
    });
};

export const logout = () => (dispatch) => {
    FireBase.auth().signOut().then(res => {
        console.log(res);
    });
}
function validatePhoneNumber(email) {
    return email != null;
}