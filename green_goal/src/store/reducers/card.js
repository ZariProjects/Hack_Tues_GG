import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    cards: null,
    error: false
};

const setCards = (state, action) => {
    return updateObject( state, {
        cards: action.cards,
        error: false
    } );
};

const fetchCardsFailed = (state, action) => {
    return updateObject( state, { error: true } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_CARDS: return setCards(state, action);    
        case actionTypes.FETCH_CARDS_FAILED: return fetchCardsFailed(state, action);
        default: return state;
    }
};

export default reducer;