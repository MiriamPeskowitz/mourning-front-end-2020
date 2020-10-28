//define the functions for links 

import moduleName from 'react'
import {NavLink} from 'react-router-dom'

const link = {
	width: "100px", 
	padding: '12px',
	margin: '0, 6px, 6px',
	background: 'blue',
	textDecoration: 'none',
	color: "white"
}
//We created the router that lets you switch the routes
//and here are the links 
//This is the recipe . Switch means it will find one. 
//AFTER THESE TWO STEPS< you have to import Navigation to APp 
//extablish the nav links and what they need to know 
const Navigation = () => (
	<div>
		<NavLink>
			to="/"
			exact
			style={link}
			activeStyle={{
				background: 'darkblue'
			}}
			>Home
		</NavLink>

		<NavLink>
			to="/categories"
			exact
			style={link}
			activeStyle={{
				background: 'darkblue'
			}}
			>Home
		</NavLink>

		<NavLink>
			to="/ingredients"
			exact
			style={link}
			activeStyle={{
				background: 'darkblue'
			}}
			>ingredients
		</NavLink>
	</div>
)



export default Navigation