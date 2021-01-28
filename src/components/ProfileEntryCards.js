import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom' 

const ProfileEntryCards = (props) => {

	const myEntryCards = props.entries.length > 0 ? props.entries.map(entry => (<li key={entry.id}><Link to={`/entries/${entry.id}`}>{entry.title}--{entry.content} </Link></li>)) : <p>No entries</p>

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

