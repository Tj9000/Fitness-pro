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
        activatedDate : Date.now()-(24*3600*1000*100),
        exprationDate : Date.now()+(24*3600*1000*100),
        price : 1800,
        paymentMode : 'Credit',
        noOfWeeks : 26,
        autoRenewal : 'Yes',
        rewards : null,
        referralLink : 'tj0251t3rq',
        cardInfo : '9876 1234 XXXX XXXX',
        phonePayInfo : null,
    },
    workoutPlanDetails: {
        trainerName: 'TrainerX',
        target: 'Muscle',
        noOfWeeks: 8,
        mode: null,
        gym: null,
        startDate: Date.now()-(24*3600*1000*7),
        endDate: Date.now()+(24*3600*1000*7*8),
        programName: 'Muscle Dribble',
        programLevel: 'Intermediate',
    }
}
const user = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_USER_FULFILLED:
            return {
                ...state,
            };
        case types.LOGIN_WITH_EMAIL: {
            return {
                ...state,
                details: { ...state.details, email: action.email}
            }
        }
        default:
            return state;
    }
};


export default user;