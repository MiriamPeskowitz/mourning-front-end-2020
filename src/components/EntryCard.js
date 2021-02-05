import React from 'react'
import { deleteEntry } from '../actions/entries.js'

import { Link } from 'react-router-dom'

	//purpose of this page: show entry, with option 
	// to edit or delete 

const EntryCard = (data) => {

	console.log("EntryCard entry", data)
	console.log("EntryCard id", data.entry.id)
	console.log("EntryCard title", data.entry.title)

	return (		
		<div className="entry-card">
			<p>{data.entry.title}</p>
			<p>{data.entry.content}</p>
			<div>
	      <Link to={`/entries/${data.entry.id}/edit`}>Edit</Link> 
  	      |  
  	         <button onClick={()=>deleteEntry(data.entry.id)}>Delete </button>
   	  	<br/>
    	  <Link to={'/profile'} >Back to my profile</Link>
   		</div>
   	</div> 
	)
}
export default EntryCard
