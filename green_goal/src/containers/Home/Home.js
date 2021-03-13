import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {

    render () {
        return (
            <div>
                <h1>Welcome! </h1>
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