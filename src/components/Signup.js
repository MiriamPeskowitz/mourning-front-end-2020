import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { history } from 'react-router-dom'
import signUpNewUser from '../actions/auth.js'

//Form | Capture entries in a variable | send data to SignUP action | 
//this function dispatches new data to the backend, then sends
// the result that's returned, to the reducer 
//then the component grabs the data from the reducer 
//then does something in the render: like let the user into their profile 

class Signup extends Component {
  constructor() {
    super() 

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      username: "",
    	email: "",
      description: "",
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
      description: this.state.description,
      email: this.state.email,
      password: this.state.password
    }
    if (this.state.password === this.state.password_confirmation) {
  	   console.log("passwords match. newUser from SignUp: ", newUser)
       this.props.signUpNewUser(newUser)    
    }
     
    // this.props.history.push('/') add once router is n 
  }
//sending username and password and description and email to signUp Action 
  render() {
    const { username, email, description, password, password_confirmation  } = this.state
    return (
    	<div >
        <div>
          <h2 style={{ color: '#9400d3' }}>Join us. Grief is welcome here. </h2>
	      	<form 
            className="signup-form" 
            onSubmit={this.handleSubmit}
            >

        	  <div>
              <label>Username    </label>
              <input 
                type="text"   
                name="username" 
                value={username} 
                onChange={this.handleChange}
              />
            </div>

            <div>
              <label>Email    </label>
              <input 
                type="email"  
                name="email" 
                value={email} 
                onChange={this.handleChange}  
                />       
            </div>

            <div>
              <label>Whom have you lost? How? When? How are you holding up?   </label>
              <textarea 
                type="text"  
                name="description" 
                value={description} 
                onChange={this.handleChange}                
                />
            </div>

            <div>
              <label>Password     </label>
              <input 
                type="password"
                name="password" 
                value={password}
                onChange={this.handleChange} 
              />
            </div>
   
             <div>
              <label>Password Confirmation   </label>
              <input 
                type="password"
                name="password_confirmation" 
                value={password_confirmation}
                onChange={this.handleChange} 
              />
            </div>

            <div>
	            <button type="submit">
               Join
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
    // WHAT DO I WANT TO RETURN? 
	}
}

export default connect(mapStateToProps, { signUpNewUser } )(Signup);

