import React, {Component} from 'react'

export default class Login extends Component {
	state= {
		username: "",
		password: ""
	}
	onChange = (e) => this.setState({[e.target.name]: e.target.value})

	onSubmit = (e) => {
		e.preventDefault()
		console.log(this.state)
		const { username, password  } = this.state
		const body = {username: username, password: password }
		console.log("onsubmit", body)
		//do something
	}
	render() {
		return (
			<>
			<h1> Login</h1>
				<form onSubmit={this.onSubmit}>
					<label>Username: 
						<input type="text" name="username" onChange={this.onChange}
							value={this.state.username}
						/>
					</label>
					<label>Password: 
						<input type="text" name="password" onChange={this.onChange}
							value={this.state.username}
						/>
					</label>
					<input type="submit" value="Login" />
				</form>
			</>
		)
	}
}