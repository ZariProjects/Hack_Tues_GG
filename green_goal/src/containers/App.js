import React, { Component } from 'react';
import './App.css';
import Cards from './Cards/Cards';
import Navbar from "../components/NavigationBar/NavigationBar"
class App extends Component {
  render () {
    return (
      <div className="App">
        <Navbar/>
        <Cards />
        
      </div>
    );
  }
} 

export default App;
