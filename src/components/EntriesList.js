import React from 'react'

const EntriesList = ( {entries} ) => {
	
	const feelings = entries.map((entry) => (
	
		<li key={entry.id}> 
			{entry.attributes.title}: {entry.attributes.content} 
		</li>
		
	))
	return (
		<div className="entries-list">
			<ul>{feelings}</ul>
		</div>
	)
}
export default EntriesList


// feature: change to most recent 15 