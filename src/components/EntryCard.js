import React from 'react'
import { connect } from 'react-redux'
import { deleteEntry } from '../actions/entries.js'
import { Link, withRouter  } from 'react-router-dom'
// import { createBrowserHistory } from "history";
// const history = createBrowserHistory({forceRefresh:true});
// componentDidUpdate(previousProps) {
// 		this.props.entry && !previousProps.entry && this.props.setFormDataForEdit(this.props.entry)
// 	}
//problem, when it rerenders after a delete, it doesn't reload -- make it a class component? 
const EntryCard = ({deleteEntry, entry, history}) => {
	// alert("Got back to entry card")
	const { title, content, id} = entry
 	// console.log(deleteEntry)
// const history1 = createBrowserHistory({forceRefresh:true});
	// const deleteEnt = (id, history) => {
	// 	deleteEntry(id,history)
	// 	history.push( '/profile')
		
	// }

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
  	    // <button onClick={deleteEnt()}>Delete Entry</button> 	   
