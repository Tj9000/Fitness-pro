import * as types from '../types';

const initialState = {
    details: {
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
    },
    profileSignupComplete: false
}
const user = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_CHECKADDUSER_SUCCESS:
            return {
                ...state,
                details: { ...state.details, 
                    ...generateUserDetailsObject(action.userDetails)
                },
                profileSignupComplete: action.userDetails.profileSignupComplete
            };
        default:
            return state;
    }
};



function generateUserDetailsObject(userDetails) {
    if(! userDetails) return {};
    return {
        name: userDetails.name,
        age: userDetails.age,
        gender: userDetails.gender,
        height: userDetails.height,
        weight: userDetails.weight,
        email: userDetails.email,
        phone: userDetails.phone,
        country: userDetails.country,
        city: userDetails.city,
        zipCode: userDetails.zipCode,
        gymAccess: userDetails.gymAccess,
        target: userDetails.target,
        languagePref: userDetails.languagePref,
    };
} 

export default user;