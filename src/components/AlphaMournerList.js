import React from 'react'

const AlphaMournersList = ( {users} ) => {
	const names = users.map((user) => (
		<li key={user.id}> {user.attributes.username}: {user.attributes.description} </li>
	))
	return <ul style={{color: 'white'}}>{names}</ul>	
}
export default AlphaMournersList
