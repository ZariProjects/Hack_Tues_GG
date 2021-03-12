import * as actionTypes from './actionTypes';

export const set_cards = (cardData) => {
    return {
        type: actionTypes.GET_CARD_START
    };
};

export const init_cards = (cardData) => {
    return {
        type: actionTypes.INIT_CARDS
    };
};