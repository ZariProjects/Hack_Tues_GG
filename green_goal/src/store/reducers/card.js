import * as actionTypes from '../actions/actionTypes';


const initialState = {
    cards: null
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