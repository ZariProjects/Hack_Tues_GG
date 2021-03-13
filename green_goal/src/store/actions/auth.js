import firebase from 'firebase';
import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
        error: null
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const userProfSet = (user) => {
    return {
        type: actionTypes.USER_PROF_SET,
        user: user
    }
}
export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const signIn = (email, password) => {
    return dispatch => {
        dispatch(authStart)
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            dispatch(userProfSet(user))
        })
        .catch((error) => {
            dispatch(authFail(error))
        });
            }
}

export const signUp = (email, password) => {
    return dispatch => {
        dispatch(authStart)
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch(userProfSet(user))
            })
            .catch((error) => {
                dispatch(authFail(error))
            });
    }
}