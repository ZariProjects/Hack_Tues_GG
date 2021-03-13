import React, { Component } from 'react';
import './SignIn.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class Login extends Component {

    
    state = {
        email: null,
        password: null
    }

    componentDidMount = () => {
    }

    onSubmitSignUp (event, email, password) {
        event.preventDefault();
        this.props.onSignIn(email, password)
        
        console.log(this.props.user)
        this.props.history.push('/')
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
                                <a className="underline" href="https://www.youtube.com/results?search_query=how+to+remember+my+password">Forgot Password?</a>
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

const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSignIn: (email, password) => dispatch(actions.signIn(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);