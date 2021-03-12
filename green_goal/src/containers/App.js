import React, { Component } from 'react';
import './App.css';
import Cards from './Cards/Cards';
import Navbar from "../components/NavigationBar/NavigationBar"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render () {
    return (
      <div className="App">
        <Navbar/>
        <Switch >
            <Route path="/" exact component={Cards} />
        </Switch >
        
      </div>
    );
  }
  
} 

export default App;
