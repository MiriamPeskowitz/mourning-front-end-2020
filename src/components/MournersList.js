import React from 'react'

const MournersList = ( {users} ) => {

	const names = users.map((user) => (
		<li key={user.id}> {user.attributes.username}: {user.attributes.description} </li>
	))
	return <ul style={{color: 'pink'}}>{names}</ul>	
}
export default MournersList

// feature: change to most recent 15 