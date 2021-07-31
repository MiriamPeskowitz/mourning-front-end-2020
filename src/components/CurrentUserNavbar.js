import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import '../stylesheets/App.css'

const gray = {color: '#C0C0C0'};

//make link a button? 
const CurrentUserNavbar = ( {currentUser} ) => {	
	console.log("CUNavbar:currentUser", currentUser)
	const name = currentUser.username
	const capitalizedUsername = name.charAt(0).toUpperCase() + name.slice(1)
	return (
		<div>
			<p>Welcome back, {capitalizedUsername}</p>
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

// {currentUser.loading ? <p>Loading...</p> : <p>Welcome back, {currentUser.username}</p>}

