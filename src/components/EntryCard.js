import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
	
const EntryCard= ({entry}) => {
	return (		
		entry ? 
			<div>
				 <h3>{entry.attributes.title}</h3>
	        <p>{entry.attributes.content}</p>
	        <Link to={`/entries/${entry.id}/edit`}>Edit this entry</Link>
	      </div> :
	      <p>nothing to edit</p>	
	)
}

export default EntryCard

// const mapStateToProps = state => {
// 	return ({
// 			currentUser: state.authReducer.currentUser,
// 			entryData: state.authReducer.currentUser
// 		})
// }
	
// export default connect(mapStateToProps, null )(EntryCard)

