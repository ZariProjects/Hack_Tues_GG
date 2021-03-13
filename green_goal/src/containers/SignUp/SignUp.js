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
        event.preventDefault();
        if (password === passwordConfirm){
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
        else {
            alert('Passwords Don`t Match')
        }

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

    render () {
        return (
            <div className="center">
                <div className="container">
                    <div className="text">
                        Sign Up</div>
                    <form action="#" onSubmit={(event) => this.onSubmitSignUp(event, this.state.email.email, this.state.password.password, this.state.passwordConfirm.passwordConfirm)}>
                        <div className="data">
                            <label>Email</label>
                            <input onChange={(event) => this.inputEmailChangedHandler(event)} type="email" required></input>
                        </div>
                        <div className="data">
                            <label>Password</label>
                            <input onChange={(event) => this.inputPassChangedHandler(event)} type="password" required></input>

                            <label>Confirm Password</label>
                            <input onChange={(event) => this.inputPassConfChangedHandler(event)} type="password" required></input>
                            <div className="btn">
                                <div className="inner"></div>
                                <button type="submit"><span>Sign Up</span></button>
                            </div>
                            <div className="signup-link">
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