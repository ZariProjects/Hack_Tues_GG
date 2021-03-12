import * as actionTypes from './actionTypes';

export const set_carts = (cartData) => {
    return {
        type: actionTypes.GET_CART_START
    };
};

export const init_cards = (cartData) => {
    return {
        type: actionTypes.INIT_CARDS
    };
};