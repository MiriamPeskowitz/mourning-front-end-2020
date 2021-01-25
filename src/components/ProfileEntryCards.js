import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

// fix: needs to come rightfrom app/hpme, or errors out when refreshed from profile  

const ProfileEntryCards = ({entries, history}) => {
	// const {entries} = entryData
	console.log("ProfileEntryCards.js entries: ", entries)
	// console.log("history: ", history)
	
	const myEntryCards = entries.length > 0 ? entries.map
			(entry => (<li key={entry.id}>{entry.title}--{entry.content} <Link to={`/entries/${entry.id}/:edit`}>Edit</Link></li>)) : <p>No entries</p>
	// 		//how can I get this to pass data? 
// const tripCards = props.trips.length > 0 ?
//     props.trips.map(t => (<p key={t.id}><Link to={`/trips/${t.id}`}>{t.attributes.name}</Link></p>)) :
//     null


	return (	
		<div className="profile-entry-cards">
			<h3>My Entries</h3>
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


	// ((entry) => 	<li key={entry.id}><Link to={`/entry/${entry.id}`}>{entry.title}--{entry.content}</Link></li>) 

