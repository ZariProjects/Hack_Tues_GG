import React, { Component } from 'react';
import './NavigationBar.css'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Navbar extends Component {
    state = { clicked: false}
    render() {
        return(
            <nav className = "NavbarItems">
                <img height="48px"src={'https://firebasestorage.googleapis.com/v0/b/green-goal-5234f.appspot.com/o/forUsDevs%2Fgreengoallogo.png?alt=media&token=d444e4a1-e329-4df0-a2c3-1d8ce2284f2d'} alt="Green Goal Logo"/>
                <ul>
                <li><NavLink to="/" exact activeClassName="active"><i className="fa fa-home" aria-hidden="true"></i></NavLink></li>
                {this.props.user ? <li><NavLink to="/cards" ><i className="fa fa-apple-alt" aria-hidden="true"></i></NavLink></li> : null} 
                {this.props.user ? <li><NavLink to="/cart" activeClassName="active"><i class="fa fa-shopping-cart" aria-hidden="true"></i></NavLink></li> : null}
                {this.props.user ? <li><NavLink to="/achievements" activeClassName="active"><i className="fa fa-trophy" aria-hidden="true"></i></NavLink></li> : null}
                
                </ul>
                {!this.props.user ? <NavLink to="/sign_up" activeClassName="active" className = "sep">Sign Up</NavLink> : null}
                {!this.props.user ? <NavLink to="/sign_in" activeClassName="active" className = "sep_1">Sign In</NavLink> : null}
                {this.props.user ? <NavLink to="/profile" activeClassName="active" className="user-icon" ><i className="fa fa-user" ></i> Profile</NavLink> : null}   
            </nav>
        )
        
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps)(Navbar);
