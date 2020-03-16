import * as types from '../types';

export const showLoginModal = () => (dispatch) => {
    dispatch({ type: types.LOGIN_MODAL_SHOW });
}
export const hideLoginModal = () => (dispatch) => {
    dispatch({ type: types.LOGIN_MODAL_HIDE });
}

export const showLoadingModal = () => (dispatch) => {
    dispatch({ type: types.LOADING_MODAL_SHOW });
}