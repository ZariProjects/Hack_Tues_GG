import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {
    render () {
        let userName = null;
        let userEmail = null;
        if (this.props.user) {
            userName = this.props.user.displayName;
            userEmail = this.props.user.email;
            console.log(userName);
            console.log(this.props.user)
        }

        return (

            <div className="Profile">
                <h1>Profile?</h1>
                <p>Display Name: {userName}</p>
                <p>Email: {userEmail}</p>
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

export default connect(mapStateToProps)(Profile);