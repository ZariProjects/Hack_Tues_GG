import cors from 'cors';
import mongoose from 'mongoose';
import * as actionTypes from './actionTypes';
import express from 'express';

const app = express();


export const set_cards = (cardData) => {
    return {
        type: actionTypes.GET_CARD_START
    };
};

export const init_cards_start = (cardData) => {
    return {
        type: actionTypes.INIT_CARDS
    };
};

export const init_cards = () => {
    return dispatch => {
        app.use(cors());
        app.use(express.json());
        mongoose.connect('mongodb+srv://lacho:lacho123@cluster1.horty.mongodb.net/green_goal_main_db');
        


        dispatch(init_cards_start());
        /*await mongoose.connect('mongodb://localhost/my_database', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });*/
    };
};