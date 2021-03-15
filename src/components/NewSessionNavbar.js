import React from 'react'
import { NavLink } from 'react-router-dom'

const gray = {color: '#C0C0C0'};

const NewSessionNavbar = () => {	
	return (
		<ul className="navbar">
	 		<li> <NavLink style={gray} exact to="/">Home</NavLink> </li> 
	 		<li> <NavLink style={gray} exact to="/story">Story</NavLink> </li> 
	 		<li> <NavLink style={gray} exact to="/signup">SignUp</NavLink> </li>    
	    <li> <NavLink style={gray} exact to="/login">Login</NavLink> </li>	   
	  </ul> 
  )
}

export default NewSessionNavbar