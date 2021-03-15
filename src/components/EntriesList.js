import React from 'react'
import '../stylesheets/App.css';

const EntriesList = ( {entries} ) => {
	
	const feelings = entries.map(entry => (
		<div key={entry.id} className="entries-list"> 
			<h4>{entry.attributes.title}</h4>
			<p> {entry.attributes.content} </p>
		</div>
	))

	return <div>{feelings}</div>
}
export default EntriesList


