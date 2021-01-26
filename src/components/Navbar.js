import React from 'react'
import { connect } from 'react-redux'
import CurrentUserNavbar from './CurrentUserNavbar'
import NewSessionNavbar from './NewSessionNavbar'
// import Logout from './Logout'


const Navbar = ({ currentUser }) => {	
	console.log("currentUser", currentUser)
	// console.log("navbar loggedIn", loggedIn)
	
	// const loggedIn = !!currentUser
	// console.log("currentUser?", loggedIn)
	return ( 
		<>
		{ currentUser ? <CurrentUserNavbar /> : <NewSessionNavbar /> }
		</>
	)
}


const mapStateToProps = (state ) => {
	return {
		// loggedIn: !!state.authReducer.currentUser,
		currentUser: state.authReducer.currentUser,
		// loading: state.authReducer.loading
	}
}

export default connect(mapStateToProps, null)(Navbar)

					   
				