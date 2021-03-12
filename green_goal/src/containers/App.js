import React, { Component } from 'react';
import './App.css';
import Carts from './Carts/Carts';

class App extends Component {
  render () {
    return (
      <div className="App">
        <h1>GreenGoal</h1>
        <h2>NavBar ?</h2>
        <Carts />
        
      </div>
    );
  }
} 

export default App;
