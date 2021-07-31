import React from 'react'

const CapitalizeName = (username) => {
	const name = username
	const capitalizedUsername = name.charAt(0).toUpperCase() + name.slice(1)
	return capitalizedUsername
}
export default CapitalizeName