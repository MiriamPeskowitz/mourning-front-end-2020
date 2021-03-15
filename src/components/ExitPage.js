import React from 'react'
import { NavLink } from 'react-router-dom'
// import { Button }  from 'react-bootstrap'

const ExitPage = () => {
	const gray = {color: '#C0C0C0'};
	return (
		<div className="ExitPage" className="left-margin">
			<p>Come back soon </p>
	 		<NavLink  style={gray} exact to="/">Home</NavLink>  
	  </div>
	 )
}

export default ExitPage;
