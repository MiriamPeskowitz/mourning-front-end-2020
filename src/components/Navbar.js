import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getCurrentUser } from '../actions/auth'

const gray = {color: '#C0C0C0'};


const Navbar = ({currentUser}) => {
	

		return (
			<nav>
				<ul>
				{currentUser} ? (
						
				 		<li> <NavLink style={gray} exact to="/">Home</NavLink> </li> 

				 		<li> <NavLink style={gray} exact to="/profile">Profile</NavLink> </li> 
			     
			      <li> <NavLink style={gray} exact to="/logout">Logout</NavLink> </li> 	      
				
				 ) : (
		
				 		<li> <NavLink style={gray} exact to="/">Home</NavLink> </li> 

				 		<li> <NavLink style={gray} exact to="/signup">SignUp</NavLink> </li>
			      
			      <li> <NavLink style={gray} exact to="/login">Login</NavLink> </li>
			     
			      <li> <NavLink style={gray} exact to="/logout">Logout</NavLink> </li> 	      
				 	
			 		)
			 	</ul>
			</nav>
		)
}


const mapStateToProps = (state) => {
 console.log("currentUser: ", state.currentUser)
  return { 
  	currentUser: state.currentUser 
  };
}

export default connect(mapStateToProps, { getCurrentUser }  )(Navbar);

