import React from 'react'
import { connect } from 'react-redux'
import { login }  from '../actions/auth.js'
import { updateLoginForm }  from '../actions/loginForm.js'

const Login = ({loginFormData, updateLoginForm, login, history}) => {
	const handleChange = (e) => {
		const updatedFormInfo = {
			...loginFormData,
			[e.target.name]: e.target.value
		}
		updateLoginForm(updatedFormInfo)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		login(loginFormData, history)
	}
	
	return (
		<div className="login">
			<h3>Login</h3>
			<form onSubmit={handleSubmit}> 
				<div>
					<input 
						placeholder="username"
						type="text" 
						name="username" 
						onChange={handleChange}
						value={loginFormData.username}
					/>
				</div>
				<div>
					<input 
						placeholder="password"
						type="password" 
						name="password" 
						onChange={handleChange}
						value={loginFormData.password}
					/>
				</div>
				<br/>
				<input 
					type="submit" 
					value="Login" 
				/>
			</form>
		</div>
	)
}

const mapStateToProps = state => {
  return { 
  	loginFormData: state.loginFormReducer
  }
}

export default connect(mapStateToProps, { login, updateLoginForm } )(Login);

	