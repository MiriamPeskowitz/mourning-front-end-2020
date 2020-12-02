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
		const {username, password, password_confirmation  } = this.state
		const body = {username: username, password: password }
		if (password === password_confirmation) {
		console.log("onsubmit", body)
		} else {
			alert("passwords don;t match")
		}
			//do something
	}
	render() {
		return (
			<>
			<h1> Signup</h1>
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
						<label>Password Confirm: 
						<input type="text" name="password_comfirmation" onChange={this.onChange}
							value={this.state.username}
						/>
					</label>
					<input type="submit" value="signUp" />
				</form>
			</>
		)
	}
}