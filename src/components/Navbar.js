import React from 'react'
import { connect } from 'react-redux'
import CurrentUserNavbar from './CurrentUserNavbar'
import NewSessionNavbar from './NewSessionNavbar'

const Navbar = ({ currentUser }) => {	
	const loggedIn = currentUser.username !== ""
	return ( 
		<>
		{ loggedIn ? <CurrentUserNavbar /> : <NewSessionNavbar /> }
		</>
	)
}

const mapStateToProps = (state ) => {
	return {
		currentUser: state.authReducer.currentUser,
		// loading: state.authReducer.loading
	}
}

export default connect(mapStateToProps, null)(Navbar)		   
				