import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signUp } from '../actions/auth'

//Form | Capture entries in a variable | send data to SignUP action | 
//this function dispatches new data to the backend, then sends
// the result that's returned, to the reducer 
//then the component grabs the data from the reducer 
//then does something in the render: like let the user into their profile 

class SignUp extends Component {
        state = {
        	newUserName: '',
        	newUserPassword: '', 
        }
    

    handleUsernameChange = (e) => {
    	this.setState({
    		[e.target.name] = (e.target.value)
    	})
    } 

    handlePasswordChange = (e) => {
    	this.setState(
    		[e.target.name] = (e.target.value)
    }

    handleSubmit = (e) => {
    	e.preventDefault()
    	const newuser = this.state.newuserName
    	this.props.signUp(newUser)


    }
//sending username and password to signUp Action 
    render() {
      return (
      	<div>
	      	<h1>Sign Up</h1>
	      	<form className="signup-form" onSubmit={this.handleSubmit}>
	         	<div className="field">
	            <label>Username</label>
	            <input value="text" name="name" value={this.state.name} onChange={this.handleUsername} type="text" placeholder="username"/>
	          </div>
	            <label>Password</label>
	            <input value="password" name="password" value={this.state.password} onChange={this.handlePassword} type="password" placeholder="password"/>
	          </div>

	          <button className="signup-button" type="submit">Submit</button>
	        </form>  
       	</div>
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

export default connect(mapStateToProps, {signUp})(SignUp);

// this.props.loggedIn ?  (
//          	<div>"Welcome {this.props.currentUser.username}" </div> 
//          	) : {
//          	<div>
//          			<label>Username</label>
//          			<input 
//          			  type="text"
//          			  onChange={this.handleChange(e)}	

//        	}

