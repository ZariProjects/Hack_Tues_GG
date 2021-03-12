import React, { Component } from 'react';
import './App.css';
import Cards from './Cards/Cards';
import Navbar from "../components/NavigationBar/NavigationBar"
import {
  Switch,
  Route
} from "react-router-dom";
import Settings from './Settings/Settings';
import SignUp from './SignUp/SignUp';
import Profile from './Profile/Profile';
import Login from './Login/Login';

class App extends Component {
  render () {
    const firebaseConfig = {
      apiKey: "AIzaSyBVrtDmXuWf_1soIcgkMHGqtyK0OAfCmCg",
      authDomain: "green-goal-5234f.firebaseapp.com",
      projectId: "green-goal-5234f",
      storageBucket: "green-goal-5234f.appspot.com",
      messagingSenderId: "402826671794",
      appId: "1:402826671794:web:b704c25a1217445d7c3bab",
      measurementId: "G-JBGCZGYQ0Q"
    };

    return (
      <div className="App">
        <Navbar/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Switch >
          <Route path="/log_in" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/sign_up" component={SignUp} />
          <Route path="/settings" component={Settings}/>
          <Route path="/" exact component={Cards} />
          {firebaseConfig}
        </Switch >
        
        
      </div>
    );
  }
  
} 

export default App;
