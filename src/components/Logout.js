import React from 'react'
import { connect } from 'react-redux'
import { logOut } from "../actions/auth.js"
import { withRouter } from 'react-router-dom'

// add history as prop
const Logout = ({ logOut, history }) => {
//build with function inline 
	return (
		<div className="Logout">
			<form onSubmit={(event) => {
					event.preventDefault()
					logOut(history)
				}
			}>
			<input type="submit" value="Log Out" />
			</form>	
		</div>	
	)
}

export default withRouter(connect (null, { logOut} )(Logout))

