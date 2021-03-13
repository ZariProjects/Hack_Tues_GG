import React, { Component } from 'react';
import './Login.css';


class Login extends Component {
    render() {
        return (

            <div class="center">
                <div class="container">
                    <div class="text">
                        Login Form</div>
                    <form action="#">
                        <div class="data">
                            <label>Email or Phone</label>
                            <input type="text" required>
                            </input>
                        </div>
                        <div class="data">
                            <label>Password</label>
                            <input type="password" required ></input>
                            <div class="forgot-pass">
                                <a class="underline" href="#">Forgot Password?</a>
                            </div>
                            <div class="btn">
                                <div class="inner"></div>
                                <button type="submit"><span>login</span></button>
                            </div>
                            <div class="signup-link">
                                Not a member? <a class="underline" href="#">Signup now</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;