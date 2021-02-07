import React from 'react'
import { connect } from 'react-redux'
import { deleteEntry } from '../actions/entries.js'
import { Link, withRouter } from 'react-router-dom'

//problem, when it rerenders after a delete, it doesn't reload -- make it a class component? 
const EntryCard = ({deleteEntry, entry, history}) => {
	// alert("Got back to entry card")
	const { title, content, id} = entry
 	console.log(deleteEntry)


	return (		
		<div className="entry-card">
			<p>{title}</p>
			<p>{content}</p>
			<div>
	      <Link to={`/entries/${id}/edit`}>Edit</Link> 
  	     <br/> 
  	    <button onClick={()=>deleteEntry(id, history)}>Delete Entry</button> 	   
   	  	<br/>
    	  <Link to={'/profile'} >Back to my profile</Link>
   		</div>
   	</div> 
	)
}

export default withRouter(connect(null, { deleteEntry })(EntryCard))
