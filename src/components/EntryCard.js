import React from 'react'
import { connect } from 'react-redux'
import { deleteEntry } from '../actions/entries.js'
import { Link, withRouter  } from 'react-router-dom'
import styled from 'styled-components'


const EntryCard = ({deleteEntry, entry, history}) => {
	const { title, content, id} = entry
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
