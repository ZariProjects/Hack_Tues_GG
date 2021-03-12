import React, { Component } from 'react';
import './App.css';
import Carts from './Carts/Carts';
import Navbar from "../components/NavigationBar/NavigationBar"
class App extends Component {
  render () {
    return (
      <div className="App">
        <Navbar/>
        <Carts />
        
      </div>
    );
  }
} 

export default App;
