
import React from 'react'



const MournersList = ( {users} ) => {
	console.log("users:", users)
	const names = users.map((user) => (
		<li key={user.id}> {user.attributes.name} </li>
	))

	return <ul>{names}</ul>
	
}

export default MournersList

//destructure somehow -- need to get the names and the ids 
//from the user object 