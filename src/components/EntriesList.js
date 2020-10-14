import React from 'react'

const EntriesList = ( {entries} ) => {
	console.log("entries:", entries)
	const feelings = entries.map((entry) => (	
		<li key={entry.id}>  {entry.attributes.content} </li>
	))
	return (<ul style={{listStyleType: "none"}}>{feelings}</ul>)
}
export default EntriesList
