import React, { Component } from 'react';
import './App.css';
import Cards from './Cards/Cards';
import Navbar from "../components/NavigationBar/NavigationBar"
import {
  Switch,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";
import { connect } from 'react-redux';
import Settings from './Settings/Settings';
import SignUp from './SignUp/SignUp';
import Profile from './Profile/Profile';
import SignIn from './SignIn/SignIn';
import Achievements from './Achievements/Achievements';

class App extends Component {
  render () {
    let routes = (
      <Switch>
        <Route path="/" exact component={Cards} />
        <Route path="/achievements" component={Achievements}/>
        <Route path="/profile" component={Profile} />
        
        <Route path="/settings" component={Settings}/>
        <Redirect to="/" />
      </Switch>
    );

    if ( !this.props.isAuthenticated ) {
      routes = (
        <Switch >
          <Route path="/sign_in" component={SignIn} />
          <Route path="/sign_up" component={SignUp} />
          <Route path="/" exact component={Cards} />
          
        </Switch >
        
      );
    }

    return (
      <div className="App">
        <Navbar/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {routes}
      </div>
    );
  }
  
} 

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.user !== null,
    user: state.auth.user
  };
};


export default withRouter( connect( mapStateToProps)( App ) );
