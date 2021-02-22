import React from 'react'
import '../stylesheets/App.css';

const EntriesList = ( {entries} ) => {
	
	const feelings = entries.map(entry => (
		<div key={entry.id} > 
			<h4>{entry.attributes.title}</h4>
			<p> {entry.attributes.content} </p>
		</div>
	))

	return <div className="entries-list">{feelings}</div>
}
export default EntriesList


