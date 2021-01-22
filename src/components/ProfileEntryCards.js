import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
	
// fix: needs to come rightfrom app/hpme, or errors out when refreshed from profile  

const ProfileEntryCards = ({entryData}) => {
	const {entries} = entryData
	console.log("entries: ", entries)
	
	const myEntryCards = entries.length > 0 ? entries.map((entry) => 	<li key={entry.id}><Link to={`/entry/${entry.id}`}>{entry.title}--{entry.content}</Link></li>) : <p>No entries</p>

	return (	
		<div className="profile-entry-cards">
			<h3>My Entries</h3>
			<ul>{myEntryCards}</ul>		
		</div>
		)
}

const mapStateToProps = state => {
	return ({
			entryData: state.authReducer.currentUser
		})
}
	
export default connect(mapStateToProps, null )(ProfileEntryCards)

