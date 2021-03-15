import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import '../stylesheets/App.css'

const gray = {color: '#C0C0C0'};


const CurrentUserNavbar = ( {currentUser} ) => {	
	// console.log("currentUser", currentUser)
	const {username} = currentUser
	// console.log("userName", username)
	const nameC = name => {
		const nameCap = username[0].toUpperCase() + username.slice(1)
		console.log("nameCap", nameCap)
		return nameCap
	}
	
	return (
		<>
			<p id="welcome-back">Welcome back, {nameC({username})}</p>
		  <ul className="navbar">
		 		<li> <NavLink style={gray} exact to="/">Home</NavLink> </li> 
		 		<li> <NavLink style={gray} exact to="/story">About</NavLink> </li> 
		 		<li> <NavLink style={gray} exact to="/profile">My Profile</NavLink> </li> 
		    <li> <NavLink style={gray} exact to="/logout">Logout</NavLink> </li> 			    
		  </ul> 
	  </>
	)
}
const mapStateToProps = state => {
	return {
		currentUser: state.authReducer.currentUser
	}
}
export default connect(mapStateToProps, null)(CurrentUserNavbar)

// {currentUser.loading ? <p>Loading...</p> : <p>Welcome back, {currentUser.username}</p>}

