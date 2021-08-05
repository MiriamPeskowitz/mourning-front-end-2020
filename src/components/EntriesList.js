import React from 'react'

const EntriesList = ( {entries} ) => {
	
	const feelings = entries.map((entry) => (
		<li key={entry.id}> 
			{entry.attributes.title}: {entry.attributes.content} 
		</li>
	))

	return (
		<section className="entry-list">
			<ul style={{color: 'pink'}}>{feelings}</ul>
		</section>
	)
}
export default EntriesList


