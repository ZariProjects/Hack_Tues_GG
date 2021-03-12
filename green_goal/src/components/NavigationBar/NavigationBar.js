import React, { Component } from 'react';
import {MenuItems} from './MenuItems'
import { Button } from '../Button/Button'
import './NavigationBar.css'
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    state = { clicked: false}
    render() {
        return(
            <nav className = "NavbarItems">
                <h1>GreenGoal</h1>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/profile">Profile</NavLink>
                <NavLink to="/cart">Cart</NavLink>
                <NavLink to="/settings">Settings</NavLink>
                <NavLink to="/sign_up">Sign Up</NavLink>
                <NavLink to="/sign_in">Sign In</NavLink>
            </nav>
        )
        
    }
}

export default Navbar;
