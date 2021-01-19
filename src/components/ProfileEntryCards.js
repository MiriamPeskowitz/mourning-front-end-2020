import React from 'react'
import { connect } from 'react-redux'
	// const entriesDisplay = data.entries.map(e => <p>{e.title}--{e.content}</p>)


const ProfileEntryCards = ({entryData}) => {
	const {entries} = entryData
	console.log("entries: ", entries)
	// const entriesDisplay = entries.map((e => <p>{e.title}--{e.content}</p>))
	const myEntryCards = entries.map((entry) => <li key={entry.id}>{entry.title}--{entry.content}</li>)

	return (	
		<div className="profile-entry-cards">
			<h3>My Entries</h3>
			<ul>{myEntryCards}</ul>		
		</div>
		)
}


const mapStateToProps = state => {
	return ({
			currentUser: state.authReducer.currentUser,
			entryData: state.authReducer.currentUser
	// 		userdata here for profile, currentUser.entries. 
		})
}
	// const entriesDisplay = entries.map(e => <p>{e.title}--{e.content}</p>)
	// const PersonalEntryCard = props.personalEntries.length
// export default connect(mapStateToProps, {} )(Profile);
export default connect(mapStateToProps, null )(ProfileEntryCards)
// Entry card title, content, from Profile 
		// Will need a form for composing a new entry,
