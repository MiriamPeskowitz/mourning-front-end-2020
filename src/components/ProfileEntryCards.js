import React from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom' 
// import Card from 'react-bootstrap/Card'

const ProfileEntryCards = ({ entries }) => {
	console.log("PECards", entries.attributes)
	
	const myEntryCards = entries.length > 0 ? entries.map(entry => (<li key={entry.id}><NavLink to={`/entries/${entry.id}`} activeStyle={{color: "white"}}>{entry.title}--{entry.content} </NavLink></li>)) : <p>No entries</p>

	return (	
			<div className="profile-entry-cards">
				<ul>{myEntryCards}</ul>		
			</div>	
	)
}

const mapStateToProps = state => {
	return ({
		entries: state.authReducer.currentUser.entries
	})
}
	
export default withRouter(connect(mapStateToProps, null )(ProfileEntryCards))

