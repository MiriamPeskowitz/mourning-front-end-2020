import React from 'react'
import { connect } from 'react-redux'
import { createEntry } from '../actions/entries.js'
import { updateNewEntryToReducer }  from '../actions/entryForm.js'

const createEntryForm = ({ currentUserId, entryFormData, createEntry, updateEntryForm, history }) => {

	const handleChange = (e) => {
		const updatedFormInfo = {
			...entryFormData,
			[e.target.name]: e.target.value
		}
		updateNewEntryToReducer(updatedFormInfo)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		createEntry({
			entryFormData, 
			currentUserId,
		}, history)
	}
	
	return (
		<div className="login">
			<h3>Create new entry</h3>
			<form onSubmit={handleSubmit}> 
				<div>
					<input 
						placeholder="title"
						type="text" 
						name="title" 
						onChange={handleChange}
						value={entryFormData.title}
					/>
				</div>
				<div>
					<input 
						placeholder="How are you feeling?"
						type="text" 
						name="content" 
						onChange={handleChange}
						value={entryFormData.content}
					/>
				</div>
				<br/>
				<input 
					type="submit" 
					value="Save" 
				/>
			</form>
		</div>
	)
}

//add public/private boolean 
const mapStateToProps = state => {
  return { 
  	entryFormData: state.entryFormReducer,
  	currentUserId: state.authReducer.currentUser.id
  }
}

export default connect(mapStateToProps, { createEntry, updateNewEntryToReducer })(createEntryForm)



