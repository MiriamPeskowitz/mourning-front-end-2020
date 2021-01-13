import React from 'react';
import { connect } from 'react-redux'
import { signup } from '../actions/auth.js'
import { updateSignupForm } from '../actions/signupForm.js'
import '../stylesheets/Signup.css'

const Signup = ({updateSignupForm, history, signup}) => {
 
  const handleChange = (e) => {
  	const updatedSignupForm = {
      ...signupFormData,
  		[e.target.name]: e.target.value
    }
  	updateSignupForm(updatedSignupForm)
  } 

  handleSubmit = (e) => {
  	e.preventDefault()	

    if (this.state.password === this.state.password_confirmation) {
      signup(signupFormData)
      console.log("passwords match. newUser can SignUp: ", newUser)
    } else {
      alert("passwords don't match")
    }
  }
  
  return (
      <>
        <h2 style={{ color: '#9400d3' }}>Join us. Grief is welcome here. </h2>
      	 <div>
        	<form className="input-field" onSubmit={handleSubmit} >

        	  <div>
              <input 
                placeholder="Name"
                type="text"   
                name="username" 
                value={username} 
                onChange={this.handleChange}
              />
            </div>

            <div>
              <input 
                placeholder="Email"
                type="email"  
                name="email" 
                value={email} 
                onChange={this.handleChange}  
              />       
            </div>

            <div>
              <br/>
              <textarea cols="40" rows="10"
                placeholder="Whom have you lost? How? When? How are you holding up?"
                type="text"  
                name="description" 
                value={description} 
                onChange={this.handleChange}                
              />
            </div>

            <div>
              <input 
                placeholder="Password"
                type="password"
                name="password" 
                value={password}
                onChange={this.handleChange} 
              />
            </div>
   
            <div>
              <input 
                placeholder="Password Confirmation"
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
      </>
    );
  }


const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  }
}

export default connect(mapStateToProps,  { updateSignupForm, signup } )(Signup);

//Form | Capture entries in a variable | send data to SignUP action | 
//this function dispatches new data to the backend, then sends
// the result that's returned, to the reducer 
//then the component grabs the data from the reducer 
//then does something in the render: like let the user into their profile 

