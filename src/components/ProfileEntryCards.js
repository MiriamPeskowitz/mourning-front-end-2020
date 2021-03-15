import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom' 
// import Card from 'react-bootstrap/Card'

const ProfileEntryCards = ( {entries} ) => {
	// console.log("PEC, entries:", entries)
	const ent = entries.reverse()

	const myEntryCards = ent.length > 0 ? ent.map(entry => (<li key={entry.id}><NavLink to={`/entries/${entry.id}`} activeStyle={{color: "white"}}>{entry.title}--{entry.content} </NavLink></li>)) : <p>No entries</p>

	return (	
		<>
			<div className="profile-entry-cards">
				{ myEntryCards }
			</div>	
			<br/>
		</>
	)
}

const mapStateToProps = state => {
	return ({
		entries: state.authReducer.currentUser.entries
	})
}
	
export default connect(mapStateToProps, null )(ProfileEntryCards)


