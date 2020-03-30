import * as types from '../types';

const initialState = {
    starTrainers: null,
    featuredTrainers: null,
    trainerOfTheWeek: null,

};

const training = (state = initialState, action) => {
    switch (action.type) {

        case types.GET_STAR_TRAINERS_SUCCESS:
            return Object.assign({}, state, { starTrainers: action.starTrainers });
        case types.GET_STAR_TRAINERS_START:
        case types.GET_STAR_TRAINERS_ERROR:
            return state;

        case types.GET_FEATURED_TRAINERS_SUCCESS:
            return Object.assign({}, state, { featuredTrainers: action.featuredTrainers });
        case types.GET_FEATURED_TRAINERS_START:
        case types.GET_FEATURED_TRAINERS_ERROR:
            return state;

        case types.GET_TRAINER_OFTHE_WEEK_SUCCESS:
            return Object.assign({}, state, { trainerOfTheWeek: action.trainerOfTheWeek });
        case types.GET_TRAINER_OFTHE_WEEK_START:
        case types.GET_TRAINER_OFTHE_WEEK_ERROR:
            return state;

        default:
            return state;
    }
};

export default training;