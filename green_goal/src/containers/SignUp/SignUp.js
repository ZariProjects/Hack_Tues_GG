import React, { Component } from 'react';
import './SignUp.css';
import { NavLink } from 'react-router-dom';

class SignUp extends Component {
    render () {
        return (
            <div class="center">
                <div class="container">
                    <div class="text">
                        Sign Up</div>
                    <form action="#">
                        <div class="data">
                            <label>Email or Phone</label>
                            <input type="text" required></input>
                        </div>
                        <div class="data">
                            <label>Password</label>
                            <input type="password" required></input>

                            <label>Confirm Password</label>
                            <input type="password" required></input>
                            <div class="btn">
                                <div class="inner"></div>
                                <button type="submit"><span>Sign In</span></button>
                            </div>
                            <div class="signup-link">
                                Already a member?
                                <NavLink to="/log_in">Login now</NavLink>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignUp;