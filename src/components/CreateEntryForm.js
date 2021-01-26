import React from 'react'
import { connect } from 'react-redux'
import { createEntry } from '../actions/entries.js'
import { updateEntryForm }  from '../actions/entryForm.js'

const createEntryForm = ({ currentUser, entryFormData, createEntry, updateEntryForm, history }) => {
	//now id/curremtUser.id is doubled; fix 

	const handleChange = (e) => {
		const updatedFormInfo = {
			...entryFormData,
			[e.target.name]: e.target.value
		}
		updateEntryForm(updatedFormInfo)

	}

	const handleSubmit = (e) => {
		e.preventDefault()
		createEntry(entryFormData, currentUser.id, history)
	
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
  	currentUser: state.authReducer.currentUser
  }
}

export default connect(mapStateToProps, { createEntry, updateEntryForm  })(createEntryForm)



