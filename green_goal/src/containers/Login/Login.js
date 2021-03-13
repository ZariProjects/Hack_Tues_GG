import React, { Component } from 'react';
import './Login.css';
import { NavLink } from 'react-router-dom';

class Login extends Component {
    render() {
        return (

            <div className="center">
                <div className="container">
                    <div className="text">
                        Login Form</div>
                    <form action="#">
                        <div className="data">
                            <label>Email or Phone</label>
                            <input type="text" required>
                            </input>
                        </div>
                        <div className="data">
                            <label>Password</label>
                            <input type="password" required ></input>
                            <div className="forgot-pass">
                                <a class="underline" href="https://www.youtube.com/results?search_query=how+to+remember+my+password">Forgot Password?</a>
                            </div>
                            <div className="btn">
                                <div className="inner"></div>
                                <button type="submit"><span>login</span></button>
                            </div>
                            <div className="signup-link">
                                Not a member?
                                <NavLink to="/sign_up">Sign Up now</NavLink>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;