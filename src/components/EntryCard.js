import React from 'react'
// import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
	
const EntryCard= (entry) => {
	console.log("entry:", entry)
	return (		
		
			<div>
				<h3>{entry.title}</h3>
	      <p>{entry.content}</p>
	      <Link to={`/entries/${entry.id}/edit`}>Edit this entry</Link>
	     </div> 
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

