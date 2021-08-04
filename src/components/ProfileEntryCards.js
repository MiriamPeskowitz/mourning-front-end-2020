import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom' 
// import Card from 'react-bootstrap/Card'

// send as props, or mapStateToProps
//went with props passed from Profile. Why? Is there an async thing that was happening with MSP? But why would this be solved with passed props? Should I delete MSP? 
//other ways to solve something like this? 
//because that hack didn't work
//now back to msp, still doesn't work coming straight from login 

//Why did I have withRouter? since I'm not passing history. Delete? 
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
		// cu: state.authReducer.currentUser
	

	})
}
	
export default connect(mapStateToProps, null )(ProfileEntryCards)


