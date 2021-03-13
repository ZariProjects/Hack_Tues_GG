import React, { Component } from 'react';
import './SignUp.css';
import { NavLink } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

class SignUp extends Component {

    state = {
        email: null,
        password: null,
        passwordConfirm: null
    }

    onSubmitSignUp (event, email, password, passwordConfirm) {
        event.preventDefault();
        if (password === passwordConfirm){
            this.props.onSignUp(email, password)
            if (this.props.error) {
                alert(this.props.error);
            }
        }
        if (this.props.user) {
            this.props.history.push("/");
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
                                <NavLink to="/sign_in">Sign In Now</NavLink>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        user: state.auth.user,
        error: state.auth.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSignUp: (email, password) => dispatch(actions.signUp(email, password))
    }    
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);