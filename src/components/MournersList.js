
import React from 'react'

const MournersList = ( {users}) => {

	const names = users.map((user) => (
		<li key={user.id}> {user.name} </li>
	))
	return names
	
}

export default MournersList

//destructure somehow -- need to get the names and the ids 
//from the user object 