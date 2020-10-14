import React, { Component } from 'react';
import { connect } from 'react-redux'

class LoginForm extends Component {
	constructor(props){
		super(props)
		state = {
			newUserName: '',
			newUserPassword: ''
			}
		}
		handleChange = (event) => {
			this.setState({
				username: event.target.value
			})
		}
		handleSubmit = (event) => {
			event.preventDefault()
			this.props.Login
		}
		render() {
			return (
				<div>
				<form onSubmit= {this.handleSubmit}>
					<input
						type="text"
						value={this.state.username}
						onChange={ this.handleChange}	
					/>
					<input type="submit" value="Submit"/>
				</form>
				Test: {this.state.username}
				</div>
			)
		}
	}
}
export default connect(mapStateToProps, {} )(LoginForm)