import React from 'react'
import '../stylesheets/App.css';

const MournersList = ( {users} ) => {

	const names = users.map(user => (
		<div key={user.id} className="mourners-list"> 
			<h4>{user.attributes.username}</h4>
			<p> {user.attributes.description} </p>
		</div>
	))
	return <div >{names}</div>	
}
export default MournersList
