import * as types from '../types';
import { push } from 'connected-react-router';

export const loginUserWithEmail = email => (dispatch)=>{
    if(email && validateEmail(email)) {
        dispatch({ type: types.LOGIN_WITH_EMAIL, email: email });
        dispatch(push('/profile'))
    }
};


function validateEmail(email) {
    return email != null;
}