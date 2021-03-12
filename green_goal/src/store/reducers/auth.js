import * as actionTypes from '../actions/actionTypes';

const initialState = {
    auth: {
        isAuthenticated: false
    }
};

export const cardReducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_CARD_START:
            return {
                ...state
            }

        default:
            return state
    }
}