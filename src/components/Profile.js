import React from 'react'
import { connect } from 'react-redux'
import MemoryCard from './MemoryCard'
import Entry from './Entry'
import CreateEntryForm from './CreateEntryForm'
//my name 
//card with data: who died, when, their story

const Profile = ({currentUser, entryData}) => {
	// console.log("entries: ", entryData)
	const entriesDisplay = entryData.entries.map(e => <p>{e.title}--{e.content}</p>)
	console.log("entriesDisplay:", entriesDisplay)

	return (
		<div className="profile">
			<h2>{currentUser.username}</h2>
			<div>
				<h3>My Entries</h3>
					<CreateEntryForm />
					<Entry />
					
			</div>
			<div>
			 {entriesDisplay}
			</div>
			<div>
				<h3>People I Remember</h3>
					<MemoryCard />

			</div>	
		</div>

		//cards -- with data of each person <
		//jane.people -- need new model 
		//start with one. 
		//will show all the entries of a single user 
		//two sections. 1 is the alter 2. is the entries. currentUser.entries
	 )
}

const mapStateToProps = state => {

return ({
		currentUser: state.authReducer.currentUser,
		entryData: state.authReducer.currentUser
	})
}

export default connect(mapStateToProps, {} )(Profile);


// 	const feelings = entries.map((entry) => (
// 		<li key={entry.id}> {entry.attributes.title}: {entry.attributes.content} </li>
// 	))
// 	return <ul style={{color: 'yellow'}}>{feelings}</ul>
// }