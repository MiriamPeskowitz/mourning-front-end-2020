import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
// ?change to editCard
	//purpose of this page: to edit or delete 

const EntryCard = ({currentUser, entries, match}) => {

	console.log("entries in EditCard", entries)
	console.log("currentUser in EditCard", currentUser)

	const id = parseInt(match.params.id)
	const entry = entries.find(e => e.id === id)
	console.log("entry: ", entry)

	return (	
			<div>
				<p>{entry.title} -- {entry.content}</p>
	      <Link to={`entries/${entry.id}/edit`}>Edit</Link> 
	      | <button>Delete</button> 
	      | <Link to={'/profile'} >Back to my profile</Link>
	   	</div> 
	
	)
}
// link should be a button that opens up the form -onClick, open editForm
const mapStateToProps = state => {
	return ({
		currentUser: state.authReducer.currentUser,
		entries: state.authReducer.currentUser.entries
	})
}
export default withRouter(connect(mapStateToProps, {} )(EntryCard))

// import { connect } from 'react-redux'
// import { createEntry } from '../actions/entries.js'
// import { updateEntryForm }  from '../actions/entryForm.js'

// const createEntryForm = ({ currentUser, entryFormData, createEntry, updateEntryForm, history }) => {
// 	//now id/curremtUser.id is doubled; fix 

// 	const handleChange = (e) => {
// 		const updatedFormInfo = {
// 			...entryFormData,
// 			[e.target.name]: e.target.value
// 		}
// 		updateEntryForm(updatedFormInfo)
// 	}

// 	const handleSubmit = (e) => {
// 		e.preventDefault()
// 		createEntry(entryFormData, currentUser.id, history)
// 	}
	
// 	return (
// 		<div className="login">
// 			<h3>Create new entry</h3>
// 			<form onSubmit={handleSubmit}> 
// 				<div>
// 					<input 
// 						placeholder={}
// 						type="text" 
// 						name="title" 
// 						onChange={handleChange}
// 						value={entryFormData.title}
// 					/>
// 				</div>
// 				<div>
// 					<input 
// 						placeholder="How are you feeling?"
// 						type="text" 
// 						name="content" 
// 						onChange={handleChange}
// 						value={entryFormData.content}
// 					/>
// 				</div>
// 				<br/>
// 				<input 
// 					type="submit" 
// 					value="Save" 
// 				/>
// 			</form>
// 		</div>
// 	)
// }

// //add public/private boolean 
// const mapStateToProps = state => {
//   return { 
//   	entryFormData: state.entryFormReducer,
//   	currentUser: state.authReducer.currentUser
//   }
// }

// export default connect(mapStateToProps, { updateEntryForm  })(createEntryForm)



// const mapStateToProps = state => {
// 	return ({
// 			currentUser: state.authReducer.currentUser,
// 			entryData: state.authReducer.currentUser
// 		})
// }
	
// export default connect(mapStateToProps, null )(EntryCard)

