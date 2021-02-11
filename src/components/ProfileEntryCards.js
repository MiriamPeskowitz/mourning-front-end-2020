import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom' 
// import Card from 'react-bootstrap/Card'

// send as props, or mapStateToProps
//went with props passed from Profile. Why? Is there an async thing that was happening with MSP? But why would this be solved with passed props? Should I delete MSP? 

//Why did I have withRouter? since I'm not passing history. Delete? 
const ProfileEntryCards = (props ) => {
	console.log("PEC, entries:", props.entries)
	const { entries } = props

	const myEntryCards = entries.length > 0 ? entries.map(entry => (<li key={entry.id}><NavLink to={`/entries/${entry.id}`} activeStyle={{color: "white"}}>{entry.title}--{entry.content} </NavLink></li>)) : <p>No entries</p>


	return (	
		<div className="profile-entry-cards">
			{ myEntryCards }
		</div>	
	)
}

const mapStateToProps = state => {
	return ({
		entries: state.authReducer.currentUser.entries
	})
}
	
export default withRouter(connect(mapStateToProps, null )(ProfileEntryCards))


