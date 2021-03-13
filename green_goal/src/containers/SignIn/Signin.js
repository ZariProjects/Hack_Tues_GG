import React, { Component } from 'react';
import './SignIn.css';
import { NavLink } from 'react-router-dom';
import firebase from 'firebase';

class SignIn extends Component {

    
    state = {
        email: null,
        password: null
    }

    onSubmitSignUp (event, email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log(user)
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
        

    }

    inputEmailChangedHandler(event) {
        const updatedEmail = {
            email: event.target.value
        }
        this.setState({...this.state, email: updatedEmail})
    }

    inputPassChangedHandler(event) {
        const updatedPass = {
            password: event.target.value
        }
        this.setState({...this.state, password: updatedPass})
    }

    inputPassConfChangedHandler(event) {
        const updatedPassConf = {
            passwordConfirm: event.target.value
        }
        this.setState({...this.state, passwordConfirm: updatedPassConf})
    }


    render() {
        return (

            <div className="center">

                <div className="container">
                    <div className="text">
                        Sign In</div>
                    <form action="#" onSubmit={(event) => this.onSubmitSignUp(event, this.state.email.email, this.state.password.password)}>
                        <div className="data">
                            <label>Email</label>
                            <input onChange={(event) => this.inputEmailChangedHandler(event, this.state.email)}type="email" required>
                            </input>
                        </div>
                        <div className="data">
                            <label>Password</label>
                            <input onChange={(event) => this.inputPassChangedHandler(event, this.state.password)}type="password" required ></input>
                            <div className="forgot-pass">
                                <a class="underline" href="https://www.youtube.com/results?search_query=how+to+remember+my+password">Forgot Password?</a>
                            </div>
                            <div className="btn">
                                <div className="inner"></div>
                                <button type="submit"><span>sign in</span></button>
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

export default SignIn;