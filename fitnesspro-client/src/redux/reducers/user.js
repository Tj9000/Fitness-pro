import * as types from '../types';

const initialState = {
    details: {
        'name': 'MyName',
        'age': 24,
        'gender': 'Female',
        'height': 160,
        'weight': 56,
        'email': 'myname@gmail.com',
        'phone': '+1 9876543210',
        'city': 'Mysore',
        'zipCode': 570008,
        'gymAccess': null,
        'target': null,
        'languagePref': 'English'
    },
    membershipDetails: {
        activatedDate : Date.now()-(24*3600*1000*10),
        exprationDate : Date.now()+(24*3600*1000*10),
        price : 1800,
        paymentMode : 'Credit',
        noOfWeeks : 26,
        autoRenewal : 'Yes',
        rewards : null,
        referralLink : 'tj0251t3rq',
        cardInfo : '9876 1234 XXXX XXXX',
        phonePayInfo : null,
    }
}
const user = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_USER_FULFILLED:
            return {
                ...state,
            };

        default:
            return state;
    }
};


export default user;