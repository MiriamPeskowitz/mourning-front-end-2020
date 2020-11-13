import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { history } from 'react-router-dom'
import { signUp } from '../actions/auth'


//Form | Capture entries in a variable | send data to SignUP action | 
//this function dispatches new data to the backend, then sends
// the result that's returned, to the reducer 
//then the component grabs the data from the reducer 
//then does something in the render: like let the user into their profile 

class SignUp extends Component {
  constructor() {
    super() 

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      username: "",
    	email: "",
      password: "",
      password_confirmation: "",
    } 
  }

  handleChange = (e) => {
  	this.setState({
  		[e.target.name]: e.target.value
  	})
  } 

 //check if this is right, what's newUser
  handleSubmit = (e) => {
  	e.preventDefault()	
    // const = this.state.username, this.state.email, this.state.password
    const newUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }
    if (this.state.password === this.state.password_confirmation) {
  	   console.log("newUser from SignUp", newUser)
       this.props.signUp(newUser)    
    }
     
    // this.props.history.push('/') add once router is n 
  }
//sending username and password to signUp Action 
  render() {
    const { username, email, password, password_confirmation  } = this.state
    return (
    	<div className="col-md-12">
        <div className="card card-container">
          <h2 style={{ color: '#9400d3' }}>Welcome. Join us. </h2>
	      	<form 
            className="signup-form" 
            onSubmit={this.handleSubmit}
            >

        	  <div className="form-group">
              <label> Username </label>
              <input 
                type="text" 
                className="form-control"  
                name="username" 
                value={username} 
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label>Email </label>
              <input 
                type="email" 
                className="form-control"  
                name="email" 
                value={email} 
                onChange={this.handleChange}                />
            </div>

            <div className="form-group">
              <label>Password </label>
              <input 
                type="password" 
                className="form-control" 
                name="password" 
                value={password}
                onChange={this.handleChange} 
              />
            </div>
   
             <div className="form-group">
              <label>Password Confirmation </label>
              <input 
                type="password" 
                className="form-control" 
                name="password_confirmation" 
                value={password_confirmation}
                onChange={this.handleChange} 
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
// export default SignUp

// this.props.loggedIn ?  (
//          	<div>"Welcome {this.props.currentUser.username}" </div> 
//          	) : {
//          	<div>
//          			<label>Username</label>
//          			<input 
//          			  type="text"
//          			  onChange={this.handleChange(e)}	

//        	}

