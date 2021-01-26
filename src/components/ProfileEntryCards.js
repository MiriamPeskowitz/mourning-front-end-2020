import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom' 

const ProfileEntryCards = ({entries, history}) => {

	// console.log("ProfileEntryCards.js entries: ", entries)
	
	const myEntryCards = entries.length > 0 ? entries.map
			(entry => (<li key={entry.id}>{entry.title}--{entry.content} <Link to={`/entries/${entry.id}`}>Edit</Link></li>)) : <p>No entries</p>
	return (	
		<div className="profile-entry-cards">
			<h3>My Entries</h3>
			<ul>{myEntryCards}</ul>		
		</div>
	)
}

// I want to send just this entry 
const mapStateToProps = state => {
	return ({
		entries: state.authReducer.currentUser.entries
	})
}
	
export default withRouter(connect(mapStateToProps, null )(ProfileEntryCards))

