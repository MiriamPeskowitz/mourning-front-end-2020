import React from 'react'
import { connect } from 'react-redux'
import CurrentUserNavbar from './CurrentUserNavbar'
import NewSessionNavbar from './NewSessionNavbar'
// import Logout from './Logout'


const Navbar = ({ currentUser }) => {	
	const loggedIn = currentUser.username !== ""
	// this feels kind of hacky, )
	console.log("currentUser?", loggedIn)
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

					   
				