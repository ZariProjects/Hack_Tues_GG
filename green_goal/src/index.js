import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './containers/App';

import cardReducer from './store/reducers/card';
import orderReducer from './store/reducers/order';
import authReducer from './store/reducers/auth';
import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyBVrtDmXuWf_1soIcgkMHGqtyK0OAfCmCg",
  authDomain: "green-goal-5234f.firebaseapp.com",
  projectId: "green-goal-5234f",
  storageBucket: "green-goal-5234f.appspot.com",
  messagingSenderId: "402826671794",
  appId: "1:402826671794:web:b704c25a1217445d7c3bab",
  measurementId: "G-JBGCZGYQ0Q"
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  card: cardReducer,
  order: orderReducer,
  auth: authReducer
});

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </Provider>
);


ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
);
