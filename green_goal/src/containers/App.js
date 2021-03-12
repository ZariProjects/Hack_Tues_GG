import React, { Component } from 'react';
import './App.css';
import Cards from './Cards/Cards';
import Navbar from "../components/NavigationBar/NavigationBar";
import { Route, Switch } from 'react-router-dom';
import Login from '../containers/Login/Login';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Navbar/>
        <br></br>
        <br></br>
        <br></br>
        <Switch>
            <Route path="/Login" component={Login} />
            <Route path="/" exact component={Cards} />
        </Switch>
        
      </div>
    );
  }
} 

export default App;
