import axios from 'axios';
import { HOST, BASEURL } from '../config/apiConfig';
import { FireBase } from '../firebase/firebase'

export const getApiCaller = () => {
    return new Promise(async (resolve, reject) => {
        let idToken = await genrateIdToken();
        if (idToken && idToken.token) {
            let axiosObj = axios.create({
                baseURL: `${HOST}${BASEURL}`,
                headers: {
                    'Authorization': `Bearer ${idToken.token}`,
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

export const genrateIdToken = () => {
    return FireBase.auth().currentUser.getIdTokenResult(/* forceRefresh */ false).then((tokenId) => {
        return tokenId;
    }).catch(err => {
        // Handle error
        console.log(err);
        return Promise.resolve(null);
    });
}
