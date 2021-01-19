import React from 'react'
import { connect } from 'react-redux'
	// const entriesDisplay = data.entries.map(e => <p>{e.title}--{e.content}</p>)


const ProfileEntryCards = (currentUser) => {
	
	// console.log("entries: ", entries)
	// const entriesDisplay = entries.map((e => <p>{e.title}--{e.content}</p>))
	
	return (
		<p>entriesDisplay for {currentUser}</p> 
		// { entriesDisplay }
		)
}

const mapStateToProps = state => {
	return ({
			currentUser: state.authReducer.currentUser
			// entries: state.authReducer.currentUser
	// 		userdata here for profile, currentUser.entries. 
		})
}
	// const entriesDisplay = entries.map(e => <p>{e.title}--{e.content}</p>)
	// const PersonalEntryCard = props.personalEntries.length
// export default connect(mapStateToProps, {} )(Profile);
export default connect (mapStateToProps, {} )(ProfileEntryCards)
// Entry card title, content, from Profile 
		// Will need a form for composing a new entry,
