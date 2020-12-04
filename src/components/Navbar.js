import React from 'react'
import { NavLink } from 'react-router-dom'

const gray = {color: '#C0C0C0'};

const Navbar = (props) => {
	return (
		<nav>
		 	<ul>
		 		<li> <NavLink style={gray} exact to="/signup">SignUp</NavLink> </li>
	      
	      <li> <NavLink style={gray} exact to="/login">Login</NavLink> </li>
	     
	      <li> <NavLink style={gray} exact to="/logout">Logout</NavLink> </li> 
		 	</ul>
	 	</nav>
	)
}
export default Navbar

//add your entry 
//is props necessary to import? What is it? 
//add ternary: if not signed in, then don't show logout 

		     // <li> <NavLink style={gray} exact to="/add">Add your name and experience</NavLink> </li>

