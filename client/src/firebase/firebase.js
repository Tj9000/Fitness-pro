import * as firebase from 'firebase/app';
import "firebase/auth";

import { firebaseConfig } from '../config/firebase';

export const FireBase = firebase.initializeApp(firebaseConfig);

export const googleAuthProvider= new firebase.auth.GoogleAuthProvider();
export const PhoneAuthApplicationVerifier= new firebase.auth.PhoneAuthProvider();