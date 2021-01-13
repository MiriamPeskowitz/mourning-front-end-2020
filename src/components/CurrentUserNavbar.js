import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'


const gray = {color: '#C0C0C0'};



const CurrentUserNavbar = ({ currentUser, loggedIn }) => {	
	return (
	  <ul>
			<li> Welcome Back, {currentUser} </li>

	 		<li> <NavLink style={gray} exact to="/">Home</NavLink> </li> 

	 		<li> <NavLink style={gray} exact to="/profile">Profile</NavLink> </li> 
	   
	    <li> <NavLink style={gray} exact to="/logout">Logout</NavLink> </li> 			    
	   </ul> 
	   )
	}

const mapStateToProps = ({currentUser}) => {
	return {
		currentUser, 
		loggedIn: !!currentUser
	}
}

export default connect(mapStateToProps, null)(CurrentUserNavbar)

					   
				