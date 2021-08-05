import React from 'react'

const MournersList = ( {users} ) => {
	
	const names = users.map((user) => (
		<li key={user.id}> 
			{user.attributes.username}: {user.attributes.description} 
		</li>
	))
	
	return (
		<section className="mourners-list">
			<ul style={{color: 'pink'}}>{names}</ul>	
		</section>	
	)
}
export default MournersList
