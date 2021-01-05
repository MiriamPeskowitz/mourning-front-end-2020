import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

const gray = {color: '#C0C0C0'};

class Navbar extends Component {	
	render() {

		return (
			<nav>

				
			
				<ul>
				 		<li> <NavLink style={gray} exact to="/">Home</NavLink> </li> 

				 		<li> <NavLink style={gray} exact to="/signup">SignUp</NavLink> </li>
			      
			      <li> <NavLink style={gray} exact to="/login">Login</NavLink> </li>
			     
			      <li> <NavLink style={gray} exact to="/logout">Logout</NavLink> </li> 	      
				 	
			 		
			 	</ul>
			</nav>
		)		
	}
}
function mapStateToProps(state) {
			return {
					currentUser:	state.currentUser 
			}
}


export default connect(mapStateToProps )(Navbar)


// <ul>
// 						<li> Welcome Back, {currentUser} </li>
	

// 				 		<li> <NavLink style={gray} exact to="/">Home</NavLink> </li> 

// 				 		<li> <NavLink style={gray} exact to="/profile">Profile</NavLink> </li> 
			     
// 			      <li> <NavLink style={gray} exact to="/logout">Logout</NavLink> </li> 	
// 			    </ul>      
				