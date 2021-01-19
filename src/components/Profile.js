import React from 'react'
import { connect } from 'react-redux'
import MemoryCard from './MemoryCard'
import ProfileEntryCards from './ProfileEntryCards'
import CreateEntryForm from './CreateEntryForm'
//my name 
//card with data: who died, when, their story

// const entryCards = entryData.length > 0 ? 
// 					entries.map((e => <p>{e.title}--{e.content}</p>))
// 					: <p>No entries yet.</p>

const Profile = ({currentUser, entryData}) => {

	console.log("Profile currentUser: ", currentUser)

	const data = entryData.entries
	console.log("entries: ", data)

	// const myEntries = data.map(entry => (<p key={entry.id}>{entry.title}--{entry.content}</p>))

	return (
		
		<div className="profile">
			<h2>{currentUser.username}</h2>
			<div>
				<CreateEntryForm />
				<h3>My Entries</h3>
			{data.map(entry => (<p key={entry.id}>{entry.title}--{entry.content}</p>))}
	
				
		
			</div>
			<MemoryCard />	
		</div>
	)
}
		//cards -- with data of each person <
		//jane.people -- need new model 
		//start with one. 
		//will show all the entries of a single user 
		//two sections. 1 is the alter 2. is the entries. currentUser.entries


const mapStateToProps = state => {

	return ({
			currentUser: state.authReducer.currentUser,
			entryData: state.authReducer.currentUser
		})
	}

export default connect(mapStateToProps, {} )(Profile);


	// const entriesDisplay = entries.map(e => <p>{e.title}--{e.content}</p>)
	// const PersonalEntryCard = props.personalEntries.length
	// const entriesDisplay = data.entries.map(e => <p>{e.title}--{e.content}</p>)

// <div> {entriesDisplay} </div>
// 	const feelings = entries.map((entry) => (
// 		<li key={entry.id}> {entry.attributes.title}: {entry.attributes.content} </li>
// 	))
// 	return <ul style={{color: 'yellow'}}>{feelings}</ul>
// }