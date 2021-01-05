import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login }  from '../actions/auth'

class Login extends Component {
	state = {
		currentUser: null,
		username: "",
		password: ""
	}
	
	onChange = (e) => this.setState({
		[e.target.name]: e.target.value}
		)

	onSubmit = (e) => {
		e.preventDefault()
	
		const {username, password } = this.state
		const user = { username: username, password: password }
		
		this.props.login(user)
		
			this.setState({
				currentUser: user,
				username: "", 
				password: ""
			})
		
		console.log("login done -- this.state: ", this.state)
			// localStorage.setItem('token', jwt)
		this.props.history.push('/home')
	}
	render() {
		return (
			<div>
			
				<h3>Login</h3>
				<form onSubmit={this.onSubmit}>
					<label>Username: 
						<input 
							type="text" 
							name="username" 
							onChange={this.onChange}
							value={this.state.username}
						/>
					</label>
					<br/>
					<label>Password: 
						<input 
							type="password" 
							name="password" 
							onChange={this.onChange}
							value={this.state.password}
						/>
					</label>
					<br/>
					<input 
						type="submit" 
						value="Login" 
					/>
				</form>
			</div>
		)
	}
}

function mapStateToProps(state) {
  console.log("LoginMSPstate: ", state);
  return { 
  	isLoggedIn: state.isLoggedIn, 
  	currentUser: state.currentUser 
  };
}

export default connect(mapStateToProps, { login } )(Login);

