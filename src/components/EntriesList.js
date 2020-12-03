import React from 'react'

const EntriesList = ( {entries} ) => {
	console.log("entries:", entries)
	
	const feelings = entries.map((entry) => (
		<li key={entry.id}> {entry.attributes.title}: {entry.attributes.content} </li>
	))
	return <ul>{feelings}</ul>
}
export default EntriesList


// feature: change to most recent 15 