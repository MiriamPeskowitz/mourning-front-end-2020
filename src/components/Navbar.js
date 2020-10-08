import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
	return (
		<div>
			<Link to='/main'>Main </Link>
			<Link to='SignUp'>SignUp</Link>
			<Link to='Login'>Login</Link>
			<Link to='Profile'>Profile</Link>

		</div>
	)
}

export default Navbar