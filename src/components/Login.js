import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login }  from '../actions/auth'

class Login extends Component {
	state = {
		currentUser: null,
		username: "",
		password: ""
	}
	
	onChange = (e) => this.setState({[e.target.name]: e.target.value})

	onSubmit = (e) => {
		e.preventDefault()
		console.log("this.state: ", this.state)

		// const {username, password } = this.state
		// const user = {username: username, password: password }
		console.log("signup done")
			//do something
		this.props.login(this.state)
		.then( () => {
		// if error {alert("login didn't work")} else {}
			this.setState({
				// currentUser: user,
				username: "", 
				password: ""
			})
			// localStorage.setItem('token', jwt)
			this.props.history.push('/home')
		})
		
	}
	render() {
		return (
			<div>
				<h2> Welcome Back.</h2>
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
							type="text" 
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
  console.log(state);
  return { 
  	isAuthenticated: state.loggedIn, 
  	currentUser: state.currentUser 
  };
}

export default connect(mapStateToProps, {login} )(Login);

