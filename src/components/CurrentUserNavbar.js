import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import CapitalizeName from './CapitalizeName'
import '../stylesheets/App.css'

const gray = {color: '#C0C0C0'};

const CurrentUserNavbar = ( {currentUser} ) => {	
	console.log("CUNavbar:currentUser", currentUser)

	return (
		<div>
			<p className="welcome">Welcome back, {CapitalizeName(currentUser.username)}</p>
		  <ul className="navbar">
		 		<li> <NavLink style={gray} exact to="/">Home</NavLink> </li> 
		 		<li> <NavLink style={gray} exact to="/story">About</NavLink> </li> 
		 		<li> <NavLink style={gray} exact to="/profile">My Profile</NavLink> </li> 
		    <li> <NavLink style={gray} exact to="/logout">Logout</NavLink> </li> 			    
		  </ul> 
	  </div>
	)
}
const mapStateToProps = state => {
	return {
		currentUser: state.authReducer.currentUser
	}
}

export default connect(mapStateToProps, null)(CurrentUserNavbar)

