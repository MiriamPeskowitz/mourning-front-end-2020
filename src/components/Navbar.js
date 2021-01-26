import React from 'react'
import { connect } from 'react-redux'
import CurrentUserNavbar from './CurrentUserNavbar'
import NewSessionNavbar from './NewSessionNavbar'
// import Logout from './Logout'


const Navbar = ({ currentUser, loggedIn }) => {	
	// console.log("currentUser", currentUser)
	// console.log("loggedIn", loggedIn)
	// return ( "navbar")
	// const loggedIn = !!currentUser
	// console.log("currentUser?", loggedIn)
	return ( 
		<>
		{ currentUser ? <CurrentUserNavbar currentUser={currentUser} /> : <NewSessionNavbar /> }
		</>
	)
}


const mapStateToProps = (state ) => {
	return {
		loggedIn: !!state.authReducer.currentUser,
		currentUser: state.authReducer.currentUser
	}
}

export default connect(mapStateToProps, null)(Navbar)

					   
				