import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const setCards = ( cards ) => {
    return {
        type: actionTypes.SET_CARDS,
        cards: cards
    };
};

export const fetchCardsFailed = () => {
    return {
        type: actionTypes.FETCH_CARDS_FAILED
    };
};

export const initCards = () => {
    return dispatch => {
        axios.get( 'https://green-goal-5234f-default-rtdb.firebaseio.com/cards.json')
            .then( response => {
                console.log(response.data);
                dispatch(setCards(response.data));
            } )
            .catch( error => {
                dispatch(fetchCardsFailed());
            } );
    };
};