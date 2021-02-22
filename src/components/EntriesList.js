import React from 'react'
import '../stylesheets/App.css';
const EntriesList = ( {entries} ) => {
	
	const feelings = entries.map(entry => (
		<div key={entry.id} > 
			<h4>{entry.attributes.title}</h4>
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



// import React from 'react'
// import '../stylesheets/App.css';
// import { FixedSizeList as List } from "react-window";

// const EntriesList = ( entries ) => {
// 	console.log("entries", entries)

// 	const data = entries.map(entry => {
// 		id: entry.id,
// 		title: entry.attributes.title,
// 		content: entry.attributes.content
// 	});
		
// 		const Row = "terrific"

// 	// const Row = ({ data, index, key, style }) => {
// 	// 		<div className="entries-list">
// 	// 			<div key={data.id} style={style} > 
// 	// 				<h3>{data[index].title}</h3>
// 	// 				<p> {data[index].content} </p>
// 	// 			</div>			
// 	// 		</div>
// 	// 	}

// 	return (
// 		<div>
// 			<List
//       width={1400}
//       height={700}
//       itemCount={data.length}
//       itemSize={120}
//     	>
//       {Row}
//     	</List>
// 		</div>
// 	)
// }
// export default EntriesList



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

// import React from 'react'
// import '../stylesheets/App.css';
// import { FixedSizeList as List } from "react-window";


