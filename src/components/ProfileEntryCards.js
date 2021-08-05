import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom' 

const ProfileEntryCards = ( {entries} ) => {
	// console.log("PEC, entries:", entries)

	const ent = entries.reverse()

	const individualEntries = ent.map(entry => (
			<p>
				<li key={entry.id}>
					<NavLink to={`/entries/${entry.id}`} >
					{entry.title}:  {entry.content} 
					</NavLink>
				</li>
			</p>
		)
	)
				
	const myEntryCards = ent.length > 0 ? individualEntries : <p>No entries</p>


	return <ul className="profile-list">{myEntryCards}</ul>

}

const mapStateToProps = state => {
	return ({
		entries: state.authReducer.currentUser.entries
		// cu: state.authReducer.currentUser
	

	})
}
	
export default connect(mapStateToProps, null )(ProfileEntryCards)
					// activeStyle={{color: "white"}}>

// entryiesList format
// const EntriesList = ( {entries} ) => {
	
// 	const feelings = entries.map((entry) => (
	
// 		<li key={entry.id}> 
// 			{entry.attributes.title}: {entry.attributes.content} 
// 		</li>
		
// 	))
// 	return (
// 		<div className="entries-list">
// 			<ul>{feelings}</ul>
// 		</div>
// 	)
// }
// export default EntriesList
