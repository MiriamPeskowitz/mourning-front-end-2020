import React from 'react'
import { connect } from 'react-redux'
import { deleteEntry } from '../actions/entries.js'
import { Link, withRouter } from 'react-router-dom'


const EntryCard = ({deleteEntry, entry, history}) => {

	const { title, content, id} = entry
 console.log(deleteEntry)

 // onClick={()=>deleteEntry(id, history)}>Delete </button>
	return (		
		<div className="entry-card">
			<p>{title}</p>
			<p>{content}</p>
			<div>
	      <Link to={`/entries/${id}/edit`}>Edit</Link> 
  	     <br/> 
  	    <button onClick={()=>deleteEntry(id, history)}>Click</button>
  	   
   	  	<br/>
    	  <Link to={'/profile'} >Back to my profile</Link>
   		</div>
   	</div> 
	)
}

export default withRouter(connect(null, { deleteEntry })(EntryCard))
