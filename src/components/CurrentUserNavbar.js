import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import '../stylesheets/App.css'

const gray = {color: '#C0C0C0'};


const CurrentUserNavbar = ( {currentUser} ) => {	
	// console.log("currentUser", currentUser)
	const name = currentUser.username
	// console.log("name", name)
	const nameC = (name) => {
		// console.log(name)
		const nameCap = name[0].toUpperCase() + name.slice(1)
		// console.log("nameCap", nameCap)
		return nameCap
	}
	

	return (
		<>
			<p id="welcome-back">Welcome back, {nameC(name)}</p>
		  <ul className="navbar">
		 		<li> <NavLink style={gray} exact to="/">Home</NavLink> </li> 
		 		<li> <NavLink style={gray} exact to="/story">Story</NavLink> </li> 
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

