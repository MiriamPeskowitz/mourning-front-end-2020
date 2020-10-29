import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signUp } from '../actions/auth'


//Form | Capture entries in a variable | send data to SignUP action | 
//this function dispatches new data to the backend, then sends
// the result that's returned, to the reducer 
//then the component grabs the data from the reducer 
//then does something in the render: like let the user into their profile 

class SignUp extends Component {
  constructor(props) {
    super(props) 
    this.state = {
    	username: "",
    	email: "",
      password: "",
    } 

  }
  handleChange = (e) => {
  	this.setState({
  		[e.target.name]: (e.target.value)
  	})
  } 

 //check if this is right, what's newUser
  handleSubmit = (e) => {
  	e.preventDefault()	
    const newUser = this.state 
    console.log("newUser: ", newUser)
  	this.props.signUp(newUser) //state.
  	//then what, render what page ? 
    

  }
//sending username and password to signUp Action 
  render() {
    return (
    	<div className="col-md-12">
        <div className="card card-container">
          <h1>SIGNUP</h1>
	      	<form className="signup-form" onSubmit={this.handleSubmit}>
	         	 
            <div className="form-group">
              <label>Email</label>
              <input 
                type="text" 
                className="form-control"  
                name="email" 
                value={this.state.username} 
                onChange={this.handleChange}  
                placeholder="email"
              />
            </div>

            <div className="form-group">
	            <label>Username</label>
	            <input 
                type="text" 
                className="form-control"  
                name="username" 
                value={this.state.username} 
                onChange={this.handleChange}
                placeholder="username"
              />
	          </div>

	          <div className="form-group">
	            <label>Password</label>
	            <input 
                type="password" 
                className="form-control" 
                name="password" 
                value={this.state.password}
                onChange={this.handleChange} 
                placeholder="password"
              />
	          </div>
            <div className="form-group">
	            <button 
                className="btn btn-primary btn-block"
                type="submit">
                Sign Up
              </button>
	          </div>
          </form> 
        </div> 
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

export default connect(mapStateToProps, { signUp } )(SignUp);


// this.props.loggedIn ?  (
//          	<div>"Welcome {this.props.currentUser.username}" </div> 
//          	) : {
//          	<div>
//          			<label>Username</label>
//          			<input 
//          			  type="text"
//          			  onChange={this.handleChange(e)}	

//        	}

