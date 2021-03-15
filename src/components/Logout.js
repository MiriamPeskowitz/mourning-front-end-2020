import React from 'react'
import { connect } from 'react-redux'
import { logOut, clearCurrentUser } from "../actions/auth.js"
import { withRouter } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Logout = ({ logOut, clearCurrentUser, history}) => {
	return (
		<Button>
			<form onSubmit = {(event) => {
				event.preventDefault()		
				logOut()
				history.push('/exit')
				}
			}>
				<input type="submit" value="Log Out" />
			</form>	
		</Button>
	)
}

export default withRouter(connect(null, { logOut, clearCurrentUser} )(Logout))

