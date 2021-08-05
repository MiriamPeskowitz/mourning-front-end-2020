import React from 'react'
import { connect } from 'react-redux'
import { deleteEntry } from '../actions/entries.js'
import { Link, withRouter  } from 'react-router-dom'

const EntryCard = ({deleteEntry, entry, history}) => {
	const { title, content, id} = entry
	return (		
		<div className="entry-card">
			<p>{title}</p>
			<p>{content}</p>
			<div className="entry-card-buttons-horizontal">
	      <Link className='entryLink' to={`/entries/${id}/edit`} >Edit</Link> 
   			<span>  ||  </span>	
    	  <Link className='entryLink' to={'/profile'} >Back to My Profile</Link> 	  	
   		</div>
   		<button onClick={()=>deleteEntry(id, history)}>Delete</button> 	   
   	</div> 
	)
}

export default withRouter(connect(null, { deleteEntry })(EntryCard))
