import React from 'react'
import { NavLink } from 'react-router-dom'


const gray = {color: '#C0C0C0'};

const CurrentUserNavbar = ( {currentUser} ) => {	
	const user = currentUser.username
	return (
	  <ul className="nav-bar current-user-nav-bar">
			<li> Welcome Back, {user} </li>
	 		<li> <NavLink style={gray} exact to="/">Home</NavLink> </li> 
	 		<li> <NavLink style={gray} exact to="/profile">Profile</NavLink> </li> 
	    <li> <NavLink style={gray} exact to="/logout">Logout</NavLink> </li> 			    
	  </ul> 
	)
}

export default CurrentUserNavbar
					   
				