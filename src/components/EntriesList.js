import React from 'react'
import '../stylesheets/App.css';


const EntriesList = ( {entries} ) => {
	
	const feelings = entries.map(entry => (
		<div key={entry.id} > 
			<h3>{entry.attributes.title}</h3>
			<p> {entry.attributes.content} </p>
		</div>
	))
	
	return (
		<div className="entries-list">
			{feelings}
		</div>
	)
}
export default EntriesList


// const EntriesList = ( {entries} ) => {
	
// 	const feelings = entries.map((entry) => (
	
// 		<li key={entry.id}> 
// 			{entry.attributes.title}: {entry.attributes.content} 
// 		</li>
		
// 	))
// 	return (
// 		<div className="entries-list">
// 			<ul>{feelings}</ul>
// 		</div>
// 	)
// }
// export default EntriesList


// const EntriesList = ( {entries} ) => {
// 	console.log(entries)
// 	const feelings = entries.map(entry => {
// 				<div key={entry.id} >
// 					<h3>{entry.attributes.title}</h3>
// 					<p>{entries.attributes.content}</p>
// 				</div>
// 			})
	
// 	return (
// 		<div>
// 			{feelings}
// 		</div>
// 	);
// }
// export default EntriesList
