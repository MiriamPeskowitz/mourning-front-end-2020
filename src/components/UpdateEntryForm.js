import React from 'react'
import { connect } from 'react-redux'

import { updateEntry } from '../actions/entries.js'
import { updateEntryForm }  from '../actions/entryForm.js'


const UpdateEntryForm = ({ entry, props, entryFormData, currentUserId, updateEntry, updateEditEntryForm, history }) => {
	console.log("editEntryForm entry", entry)

// const constreateEntryForm = ({ currentUserId, entryFormData, createEntry, updateEntryForm, history }) => {

	const handleChange = (e) => {
		const updatedFormInfo = {
			...entryFormData,
			[e.target.name]: e.target.value
		}
		updateEntryForm(updatedFormInfo) //make this function 
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		updateEntry({    //c
			entryFormData, 
			currentUserId,
		}, history)
	}
	
	return (
		<div className="EditEntryForm">
			<h3>Form for Editing an Entry</h3>
			<form onSubmit={handleSubmit}> 
				<div>
					<input 
						placeholder={entry.title}
						type="text" 
						name="title" 
						onChange={handleChange}
						value={entryFormData.title}
					/>
				</div>
				<div>
					<input 
						placeholder={entry.content}
						type="text" 
						name="content" 
						onChange={handleChange}
						value={entryFormData.content}
					/>
				</div>
				<br/>
				<input 
					type="submit" 
					value="Save changes" 
				/>
			</form>
		</div>
	)
}

const mapStateToProps = state => {
  return { 
  	entryFormData: state.entryFormReducer,
  	currentUserId: state.authReducer.currentUser.id
  }
}


export default connect(mapStateToProps, { updateEntry, updateEntryForm })(UpdateEntryForm)




