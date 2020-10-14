import React, { Component } from 'react';
import { connect } from 'react-redux'

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	newUserName: '',
        	newUserPassword: '', 
        }
    }

    handleLogin = () => {
    	this.props.login(this.state.newuserName)
    }

    render() {
        return (
	         this.props.loggedIn ?  (
	         	<div>"Welcome {this.props.currentUser.username}" </div> 
	         	) : {
	         	<div>
	         			<label>Username</label>
	         			<input 
	         			  type="text"
	         			  onChange={this.handleChange(e)}	

	       	}
        );
    }
}

const mapStateToProps = (state) => {
	console.log(state)
	return {
		loggedIn: state.loggedIn,
		currentUser: state.currentUser
	}
}

export default connect(mapStateToProps)(SignIn);
