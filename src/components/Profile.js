import React  from 'react'
import { connect } from 'react-redux'
import MemoryCard from './MemoryCard'
import ProfileEntryCards from './ProfileEntryCards'
import CreateEntryForm from './CreateEntryForm'
import { withRouter } from 'react-router-dom'

const Profile = ({ currentUser, history}) => {
	// console.log("Profile currentUser: ", currentUser.id)
	const entries = currentUser.entries
	console.log("entries in Profile.js: ", entries)

	return (
		<>
		<div className="profile">
			<h2>{currentUser.username}</h2>
			<div>
				<p>Testing</p>
				<CreateEntryForm history={history} />
				<ProfileEntryCards />
			</div>
			<MemoryCard />	
		</div>
		
		</>
	)
}
		//cards -- with data of each person <
		//jane.people -- need new model 
		//start with one. 
		//will show all the entries of a single user 
		//two sections. 1 is the alter 2. is the entries. currentUser.entries


const mapStateToProps = state => {
	return ({
			currentUser: state.authReducer.currentUser		})
	}

export default withRouter(connect(mapStateToProps, null )(Profile));




	// const entriesDisplay = entries.map(e => <p>{e.title}--{e.content}</p>)
	// const PersonalEntryCard = props.personalEntries.length
	// const entriesDisplay = data.entries.map(e => <p>{e.title}--{e.content}</p>)

// <div> {entriesDisplay} </div>
// 	const feelings = entries.map((entry) => (
// 		<li key={entry.id}> {entry.attributes.title}: {entry.attributes.content} </li>
// 	))
// 	return <ul style={{color: 'yellow'}}>{feelings}</ul>
// }