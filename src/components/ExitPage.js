import React from 'react'
import { NavLink } from 'react-router-dom'

const ExitPage = () => {
	const gray = {color: '#C0C0C0'};
	return (
		<div className="ExitPage">
			<ul className="nav-bar current-user-nav-bar">
	 			<li> <NavLink style={gray} exact to="/">Home</NavLink> </li>    
	  	</ul> 
			<p>Come back soon. </p>
	  </div>
	 )
}

export default ExitPage;
