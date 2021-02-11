import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button }  from 'react-bootstrap'

const ExitPage = () => {
	const gray = {color: '#C0C0C0'};
	return (
		<div className="ExitPage" >
			<ul className="nav-bar current-user-nav-bar">
	 			<Button> <NavLink style={gray} exact to="/">Home</NavLink> </Button>   
	  	</ul> 
			<p>Come back soon </p>
	  </div>
	 )
}

export default ExitPage;
