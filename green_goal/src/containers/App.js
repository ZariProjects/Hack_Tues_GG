import React, { Component } from 'react';
import './App.css';
import Carts from './Carts/Carts';
import Navbar from "../components/NavigationBar/NavigationBar"
class App extends Component {
  render () {
    return (
      <div className="App">
        <h1>GreenGoal</h1>
        <Navbar/>
        <Carts />
        
      </div>
    );
  }
} 

export default App;
