import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
	return (
		<nav>
		 	<ul>
		    <li >
	        <NavLink exact activeClassName="active" to="/signup">SignUp</NavLink>
	      </li>
	      <li>
	        <NavLink exact activeClassName="active" to="/login">Login</NavLink>
	      </li>
	      <li>
	        <NavLink exact activeClassName="active" to="/logout">Logout</NavLink>
	      </li>
		 	</ul>
	 </nav>
	)
}

export default Navbar