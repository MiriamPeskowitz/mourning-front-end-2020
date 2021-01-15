import React from 'react'
import { connect } from 'react-redux'
import MemoryCard from './components/MemoryCard'
import Entry from './components/Entry'
//my name 
//card with data: who died, when, their story

const Profile = ({currentUser}) => {
	return (
		<h2>{currentUser.username}</h2>
		<div>
			<h3>Entries</h3>
				<Entry />
		</div>
		<div>
			<h3>People I Remember</h3>
				<MemoryCard />

		</div>	
		//cards -- with data of each person <
		//jane.people -- need new model 
		//start with one. 
		//two sections. 1 is the alter 2. is the entries. currentUser.entries
	 )
}

const mapStateToProps = state => {
return ({
		currentUser: state.authReducer.currentUser
// 		userdata here for profile, currentUser.entries. 
	})
}

export default connect(mapStateToProps, {} )(Profile);


// 	const feelings = entries.map((entry) => (
// 		<li key={entry.id}> {entry.attributes.title}: {entry.attributes.content} </li>
// 	))
// 	return <ul style={{color: 'yellow'}}>{feelings}</ul>
// }