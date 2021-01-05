import React from 'react'
import { NavLink } from 'react-router-dom'

const gray = {color: '#C0C0C0'};

const Navbar = (props) => {
	
		
		return (
			<nav>

				<ul>
			
						
						<li> Welcome Back </li>

				 		<li> <NavLink style={gray} exact to="/">Home</NavLink> </li> 

				 		<li> <NavLink style={gray} exact to="/profile">Profile</NavLink> </li> 
			     
			      <li> <NavLink style={gray} exact to="/logout">Logout</NavLink> </li> 	
			    </ul>      
				
			
				<ul>
				 		<li> <NavLink style={gray} exact to="/">Home</NavLink> </li> 

				 		<li> <NavLink style={gray} exact to="/signup">SignUp</NavLink> </li>
			      
			      <li> <NavLink style={gray} exact to="/login">Login</NavLink> </li>
			     
			      <li> <NavLink style={gray} exact to="/logout">Logout</NavLink> </li> 	      
				 	
			 		
			 	</ul>
			</nav>
		)
	}

export default Navbar;

