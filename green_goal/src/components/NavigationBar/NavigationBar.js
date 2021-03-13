import React, { Component } from 'react';
import './NavigationBar.css'
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    state = { clicked: false}
    render() {
        return(
            <nav className = "NavbarItems">
                <h1>GreenGoal</h1>
                <ul>
                <li><NavLink to="/" exact activeClassName="active">Home </NavLink></li>
                <li><NavLink to="/profile" activeClassName="active">Profile</NavLink></li>
                <li><NavLink to="/cart" activeClassName="active">Cart</NavLink></li>
                <li><NavLink to="/settings" activeClassName="active">Settings</NavLink></li>
                </ul>
                <NavLink to="/sign_up" activeClassName="active" className = "sep">Sign Up</NavLink>
                <NavLink to="/log_in" activeClassName="active" className = "sep_1">Log In</NavLink>
                
            </nav>
        )
        
    }
}

export default Navbar;
