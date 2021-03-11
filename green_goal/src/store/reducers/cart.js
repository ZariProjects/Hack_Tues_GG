import * as actionTypes from '../actions/actionTypes';

const initialState = {
    carts: 3
};

export const cartReducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_CART_START:
            return {
                ...state
            }

        default:
            return state
    }
}