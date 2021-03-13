import React, { Component } from 'react';
import './SignUp.css';
import { NavLink } from 'react-router-dom';
import firebase from 'firebase';

class SignUp extends Component {

    state = {
        email: null,
        password: null,
        passwordConfirm: null
    }

    onSubmitSignUp (event, email, password, passwordConfirm) {
        event.preventDefault()
        if (password !== passwordConfirm){
            alert('Passwords Don`t Match')
        }
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
    // ..
  });
    }

    inputEmailChangedHandler(event) {
        const updatedState = {
            ...this.state,
            email: event.target.value
        }
        this.setState({updatedState})
    }

    inputPassChangedHandler(event) {
        const updatedState = {
            ...this.state,
            password: event.target.value
        }
        this.setState({updatedState})
    }

    inputPassConfChangedHandler(event) {
        const updatedState = {
            ...this.state,
            passwordConfirm: event.target.value
        }
        this.setState({updatedState})
    }

    render () {
        return (
            <div class="center">
                <div class="container">
                    <div class="text">
                        Sign Up</div>
                    <form action="#" onSubmit={(event) => this.onSubmitSignUp(event, this.state.email, this.state.password, this.state.passwordConfirm)}>
                        <div class="data">
                            <label>Email</label>
                            <input onChange={(event) => this.inputEmailChangedHandler(event)} type="email" required></input>
                        </div>
                        <div class="data">
                            <label>Password</label>
                            <input onChange={(event) => this.inputPassChangedHandler(event)} type="password" required></input>

                            <label>Confirm Password</label>
                            <input onChange={(event) => this.inputPassChangedHandler(event)} type="password" required></input>
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