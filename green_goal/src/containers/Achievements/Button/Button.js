import './Button.css'
import React, { Component } from 'react';

class Button extends Component {

    state = {
        isDisabled: false
    }

    clicked = () => {
        const newIsDisabled = true;
        this.setState({isDisabled: newIsDisabled});
    }

    render () {
        return (
            <button onClick={this.clicked} disabled={this.state.isDisabled}>{this.props.children}</button>
        );
    }
}

export default Button;