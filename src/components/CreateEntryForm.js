import React from 'react'
import { connect } from 'react-redux'
import { createEntry } from '../actions/entries.js'
import { updateNewEntryForm }  from '../actions/entryForm.js'
import { Button, Form, Col } from 'react-bootstrap'

const createEntryForm = ({ currentUserId, entryFormData, createEntry, updateNewEntryForm, history }) => {

	const handleChange = (event) => {
		event.preventDefault()
		const { name, value } = event.target
		updateNewEntryForm(name, value)
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
			<h3>Create a new entry</h3>
			<form onSubmit={handleSubmit}> 
				<Form.Group controlId="formGroupTitle">
					<Col md>
					<input
						placeholder="title"
						type="text"
						id="title"
						name="title" 
						onChange={handleChange}
						value={entryFormData.title}
					/>
				</Col>
				</Form.Group>

				<Form.Group controlId="formGroupContent">
					<Col md>
						<input 
							placeholder="How are you feeling?"
							type="text" 
							id="text"
							name="content" 
							onChange={handleChange}
							value={entryFormData.content}			
						/>
					</Col>
				</Form.Group>
				<br/>
				<Button><input 
					type="submit" 
					value="Save" 
				/></Button>
			</form>
		</div>
	)
}

//feature: add public/private boolean 
const mapStateToProps = state => {
  return { 
  	entryFormData: state.entryFormReducer,
  	currentUserId: state.authReducer.currentUser.id
  }
}

export default connect(mapStateToProps, { createEntry, updateNewEntryForm })(createEntryForm)



