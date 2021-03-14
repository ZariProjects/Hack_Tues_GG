import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./Home.css"

class Home extends Component {

    render() {
        return (
            <div className="HomeBody">
                <div className="containerHome">
                    <div className="whitesquare">
                        <div className="textHome">
                            Welcome!</div>
                        <div className="contentHome">
                            <p>Our site is a platform that connects producers of organic products with buyers and offers discounts in exchange for ecological challenges</p>
                            <h3>Help us to safe the world!</h3>
                        </div>
                    </div>
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

export default connect(mapStateToProps)(Home);