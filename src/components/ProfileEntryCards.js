import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom' 

const ProfileEntryCards = ({entries}) => {
	const ent = entries.reverse()
// className="link"
	const individualEntries = ent.map(entry => (
			<p>
				<li key={entry.id}>
					<NavLink to={`/entries/${entry.id}`} className="entryLink">
						{entry.title}:  {entry.content} 
					</NavLink>
				</li>
			</p>
		)
	)
				
	const myEntryCards = ent.length > 0 ? individualEntries : <p>No entries</p>

	return <ul className="entry-list">{myEntryCards}</ul>
}

const mapStateToProps = state => {
	return ({
		entries: state.authReducer.currentUser.entries
	})
}
	
export default connect(mapStateToProps, null )(ProfileEntryCards)
					// activeStyle={{color: "white"}}>

// }
// export default EntriesList
