import * as types from '../types';

const initialState = {
    starTrainers: null,
    featuredTrainers: null,
    trainerOfTheWeek: null,
    trainersList: [],
    details: {}
};

const trainer = (state = initialState, action) => {
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

        case types.GET_ALL_TRAINERS_SUCCESS:
            return { ...state, trainersList: action.list };
        case types.GET_ALL_TRAINERS_START:
        case types.GET_ALL_TRAINERS_ERROR:
            return state;

        case types.GET_TRAINER_DETAILS_SUCCESS:
            return { ...state, details: { ...state.details, [action.details.id]: action.details } };
        case types.GET_TRAINER_DETAILS_START:
        case types.GET_TRAINER_DETAILS_ERROR:
            return state;

        default:
            return state;
    }
};

export default trainer;