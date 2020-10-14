import React from 'react'

const MournersList = ( {users} ) => {
	console.log("users:", users)
	const names = users.map((user) => (
		<span key={user.id}> {user.attributes.name} </span>
	))
	return (
		<div>{names}</div>
	)
}

export default MournersList

//destructure somehow -- need to get the names and the ids 
//from the user object 