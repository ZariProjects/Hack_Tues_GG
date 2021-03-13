import * as actionTypes from './actionTypes';
import axios from '../../axios-instance';

export const purchaseFoodSuccess = ( id, orderData ) => {
    return {
        type: actionTypes.PURCHASE_FOOD_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};

export const purchaseFoodFail = ( error ) => {
    return {
        type: actionTypes.PURCHASE_FOOD_FAIL,
        error: error
    };
}

export const purchaseFoodStart = () => {
    return {
        type: actionTypes.PURCHASE_FOOD_START
    };
};

export const purchaseFood = ( orderData, token ) => {
    return dispatch => {
        dispatch( purchaseFoodStart() );
        axios.post( '/orders.json?auth=' + token, orderData )
            .then( response => {
                dispatch( purchaseFoodSuccess( response.data.name, orderData ) );
            } )
            .catch( error => {
                dispatch( purchaseFoodFail( error ) );
            } );
    };
};

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    };
};

export const fetchOrdersSuccess = ( orders ) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    };
};

export const fetchOrdersFail = ( error ) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    };
};

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    };
};

export const fetchOrders = (token, userId) => {
    return dispatch => {
        dispatch(fetchOrdersStart());
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios.get( '/orders.json' + queryParams)
            .then( res => {
                const fetchedOrders = [];
                for ( let key in res.data ) {
                    fetchedOrders.push( {
                        ...res.data[key],
                        id: key
                    } );
                }
                dispatch(fetchOrdersSuccess(fetchedOrders));
            } )
            .catch( err => {
                dispatch(fetchOrdersFail(err));
            } );
    };
};