//import cors from 'cors';
//import mongoose from 'mongoose';
import * as actionTypes from './actionTypes';
//import express from 'express';
///import cardRouter from '../routes/cardRoute';
//import axios from 'axios';

//const app = express();


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
    return {
        type: actionTypes.INIT_CARDS
    };}/* dispatch => {
        app.use(cors());
        app.use(express.json());
        mongoose.connect('mongodb+srv://lacho:lacho123@cluster1.horty.mongodb.net/green_goal_main_db');
        app.use('/', cardRouter)
        app.listen(3001, () => {
            console.log('Express baby');
        })
        const NewNote = {
            id: Math.random()*1000,
            isCertified: true,
            productName: "Dinq",
            sellerName: "Gancho",
            rating: Math.random()*10,
            price: Math.random()*5,
            img: 5
        }
        axios.post('http://localhost:3001/cards', NewNote)

        dispatch(init_cards_start());
        await mongoose.connect('mongodb://localhost/my_database', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
    };
};}}*/