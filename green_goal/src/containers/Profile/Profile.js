import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {
    state = {
        displayChangeInputs:false,
        dspName: null,
        emailInSt: null,
        success: false,
        successEV: false
    }

    componentDidMount () {
        const displayName = this.props.user.displayName;
        const userEmail = this.props.user.email;

        this.setState({
            ...this.state,
            dspName: displayName,
            emailInSt: userEmail
        })
    }

    formSubmitHandler (event) {
        console.log("DSP", this.state.dspName);
        event.preventDefault()
        this.props.user.updateProfile({
            displayName: this.state.dspName
          }).then(() => {
            this.setState({
                success: true
            })
          }).catch(error => {
            alert("Account Information Change Unsuccessful", JSON.stringify(error));
          });

          this.props.user.updateEmail(this.state.emailInSt).then(() => {
            this.setState({
                success: true
            })
          }).catch(error => {
            alert("Account Information Change Unsuccessful", JSON.stringify(error));
          });
    }

    emailVerifactionSend () {
        this.props.user.sendEmailVerification().then(() => {
            this.setState({
                successEV: true
            })
          }).catch(function(error) {
            alert("Unable To Send Email", JSON.stringify(error));
          });
    }



    inputDspNameChangeHandler (event) {
        this.setState({
            dspName: event.target.value
        })
    }
    inputEmailChangeHandler (event) {
        this.setState({
            emailInSt: event.target.value
        })
    }

    invertDisplayChangeInputsPropValue = () => {
        const invertPrevPropValue = !this.state.displayChangeInputs;
        this.setState({displayChangeInputs: invertPrevPropValue});
    }

    render () {
        let userName = null;
        let userEmail = null;
        let inputs = null;
        if (this.props.user) {
            userName = this.props.user.displayName;
            userEmail = this.props.user.email;
        }
        if(this.state.displayChangeInputs) {
            inputs = (
                <div className="inputs">
                    <form onSubmit={(event) => this.formSubmitHandler(event)}>
                        <input onChange={(event) => this.inputDspNameChangeHandler(event)} type="text" label="Display Name" value={this.state.emailSt} />
                        <input onChange={(event) => this.inputEmailChangeHandler(event)}type="email" value={this.state.emailSt} />
                        <button type="submit">UPDATE</button>
                    </form>
                    

                </div>
            );
        }
        return (

            <div className="Profile">
                <h1>Profile?</h1>
                <p>Display Name: {userName}</p>
                <p>Email: {userEmail}</p>
                <button onClick={this.invertDisplayChangeInputsPropValue}>{this.state.displayChangeInputs ? "Go Back": "Change Values"}</button>
                {inputs}
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