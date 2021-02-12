import React from 'react';
import { connect } from 'react-redux'
import { signup } from '../actions/auth.js'
import { updateSignupForm } from '../actions/signupForm.js'
// import '../stylesheets/Signup.css'

const Signup = ({signupFormData, updateSignupForm, history, signup}) => {
  const handleChange = (e) => {
  	const updatedSignupForm = {
      ...signupFormData,
  		[e.target.name]: e.target.value
    }
  	updateSignupForm(updatedSignupForm)
  } 

  const handleSubmit = (e) => {
  	e.preventDefault()	

    if (signupFormData.password === signupFormData.password_confirmation) {
      console.log("passwords match. newUser can SignUp: ", signupFormData, history)
      signup(signupFormData, history)
    } else {
      alert("passwords don't match; can you fix?")
    }
  }
 
  return (
    <>
      <h2 style={{ color: '#9400d3' }}>Join us. Grief is welcome here. </h2>
    	<div>
      	<form className="input-field" onSubmit={handleSubmit} >
      	  <div>
            <input 
              placeholder="name"
              type="text"   
              name="username" 
              value={signupFormData.username} 
              onChange={handleChange}
            />
          </div>
          <div>
            <input 
              placeholder="email"
              type="email"  
              name="email" 
              value={signupFormData.email} 
              onChange={handleChange}  
            />       
          </div>
          <div>
            <br/>
            <textarea cols="40" rows="10"
              placeholder="Whom have you lost? How? When? How are you holding up?"
              type="text"  
              name="description" 
              value={signupFormData.description} 
              onChange={handleChange}                
            />
          </div>
          <div>
            <input 
              placeholder="password"
              type="password"
              name="password" 
              value={signupFormData.password}
              onChange={handleChange} 
            />
          </div>
          <div>
            <input 
              placeholder="password confirmation"
              type="password"
              name="password_confirmation" 
              value={signupFormData.password_confirmation}
              onChange={handleChange} 
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
    signupFormData: state.signupFormReducer 
  }
}

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup);



