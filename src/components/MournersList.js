import React from 'react'
import '../stylesheets/App.css';

const MournersList = ( {users} ) => {

	const names = users.map(user => (
		<div key={user.id} > 
			<h4>{user.attributes.title}</h4>
			<p> {user.attributes.description} </p>
		</div>
	))
	return <div className="mourners-list" >{names}</div>	
}
export default MournersList
