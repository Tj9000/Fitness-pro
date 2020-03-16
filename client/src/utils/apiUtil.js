import axios from 'axios';
import { HOST, BASEURL } from '../config/apiConfig';
import store from '../redux/store';

export const getApiCaller = () => {
    return new Promise((resolve, reject) => {
        let loginState = store.getState().login;
        if (loginState && loginState.tokenId && loginState.tokenId.token) {
            let token = loginState.tokenId.token;
            let axiosObj = axios.create({
                baseURL: `${HOST}${BASEURL}`,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type' : 'application/json'
                }
            });
            resolve(axiosObj);
        } else {
            reject({
                code: 403,
                message: "Not Logged In"
            });
        }
    });
}