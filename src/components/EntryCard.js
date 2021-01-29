import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// ?change to editCard
	//purpose of this page: to edit or delete 

const EntryCard = (entry) => {

	console.log("EntryCard entry", entry)
	console.log("EntryCard id", entry.id)
	console.log("EntryCard title", entry.title)

	return (	
			entry ?
			<div>
				<p>{entry.title}</p>
				<p>{entry.content}</p>
				<div>
	      <Link to={`entries/${entry.id}/edit`}>Edit</Link> 
	      | <button>Delete</button> 
	      | <Link to={'/profile'} >Back to my profile</Link>
	   		</div>
	   	</div> : "show page"
	
	)
}
export default EntryCard
