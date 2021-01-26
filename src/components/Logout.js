import React from 'react'
import { connect } from 'react-redux'
import { logOut } from "../actions/auth.js"
import { withRouter } from 'react-router-dom'

// add history as prop
const Logout = ({ logOut, history }) => {

	const logout = (event) => {
	 	event.preventDefault()
		logOut(history)
	}
	return (
		<div className="Logout">
			<form onSubmit={logout}>
			<input type="submit" value="Log Out" />
			</form>	
		</div>	
	)
}

export default withRouter(connect (null, { logOut} )(Logout))

