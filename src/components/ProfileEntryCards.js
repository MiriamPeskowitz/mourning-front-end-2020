import React from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom' 

const ProfileEntryCards = (props) => {

	const myEntryCards = props.entries.length > 0 ? props.entries.map(entry => (<li key={entry.id}><NavLink to={`/entries/${entry.id}`} activeStyle={{color: "white"}}>{entry.title}--{entry.content} </NavLink></li>)) : <p>No entries</p>
	// alert('got back to profileEntryCards')
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

