import React from 'react'
import { connect } from 'react-redux'
import { deleteEntry } from '../actions/entries.js'
import { Link, withRouter } from 'react-router-dom'


	//purpose of this page: show entry, with option 
	// to edit or delete 

const EntryCard = (data) => {
	// console.log("EntryCard data: ", data)
	// console.log("EntryCard entry", data)
	// console.log("EntryCard id", data.entry.id)
	// console.log("EntryCard title", data.entry.title)
	
	const { title, content, id } = data.entry
 	console.log(" entryid as destructured id:", id)
 	console.log("entryId int:", parseInt(id))
 	const entryId = data.entry.id
 	console.log("entry id/data.entry.id", entryId)
 	//so weird that destructured 'id' wont' pass as arg;create entryId variable 
 	const handleDelete = (id, history) => {
 		console.log("handleDelete id:", id)
 		// alert("delete clicked") 
 		deleteEntry(id, history)
 	}
 	
	return (	
		
		<div className="entry-card">
			<p>{title}</p>
			<p>{content}</p>
			<div>
	      <Link to={`/entries/${id}/edit`}>Edit</Link> 
  	     <br/> 
  	    <button onClick={handleDelete}>Delete </button>
   	  	<br/>
    	  <Link to={'/profile'} >Back to my profile</Link>
   		</div>
   	</div> 
	)
}

export default withRouter(connect(null, { deleteEntry })(EntryCard))
