
import React from 'react'

const MournersList = (props) => {

	const names = this.props.users.map((user) => (
		<li key={user.id}> {user.name} </li>
	))
	return names
	
}

export default MournersList