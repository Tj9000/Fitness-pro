import * as firebase from 'firebase/app';
import "firebase/auth";

import { firebaseConfig } from '../config/firebase';

export const FireBase = firebase.initializeApp(firebaseConfig);

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const PhoneAuthApplicationVerifier = new firebase.auth.PhoneAuthProvider();


var currentUser;
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // User is signed in.
        currentUser = user;
    } else {
        // User Signed out.
        currentUser = null;
    }
}, (error) => {
    currentUser = null;
});

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        let i = 3;
        if (currentUser) {
            resolve(currentUser);
        }
        let interval = setInterval(() => {
            --i;
            if (currentUser || i <= 0) {
                clearInterval(interval);
                resolve(currentUser);
            }
        }, 1000);
    });
}