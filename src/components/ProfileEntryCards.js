import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom' 

const ProfileEntryCards = ( {entries} ) => {
	// console.log("PEC, entries:", entries)

	const ent = entries.reverse()

	const individualEntries = ent.map(entry => (
				<li key={entry.id}>
					<NavLink to={`/entries/${entry.id}`} 
					activeStyle={{color: "white"}}>
					{entry.title}:  {entry.content} 
					</NavLink><br/>
				</li>
			))
				
	const myEntryCards = ent.length > 0 ? individualEntries : <p>No entries</p>

//change to li -- 
	return <ul className="profile-entry-cards">{myEntryCards}</ul>

}

const mapStateToProps = state => {
	return ({
		entries: state.authReducer.currentUser.entries
		// cu: state.authReducer.currentUser
	

	})
}
	
export default connect(mapStateToProps, null )(ProfileEntryCards)

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
