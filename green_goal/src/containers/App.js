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
        </Switch >
        
        
      </div>
    );
  }
  
} 

export default App;
