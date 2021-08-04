CreateMemoryCard 
See what I already have 
new migration for backend? 



(use model from CreateEntryForm)
needs: 
import {createMemoryCard} from '../actions/entries.js'

import React from 'react'
import { connect } from 'react-redux'
import {createMemory} from '../actions/entries.js'
import { updateMemoryForm }  from '../actions/memoryForm.js'
import { Button, Form, Col } from 'react-bootstrap'

const createMemoryForm = ({ currentUserId, memoryFormData, createMemory, updateMemoryForm, history }) => {

	const handleChange = (event) => {
		event.preventDefault()
		const { name, value } = event.target
		updateMemoryForm(name, value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		createMemory({
			memoryFormData, 
			currentUserId,
		}, history)
	}
	
	return (
		<div className="login">
			<h3>Create a new Memory Card</h3>
			<form onSubmit={handleSubmit}> 
				
				<Form.Group controlId="formGroupTitle">
					<Col md>
					<label>Name</label>
					<input
						placeholder="name"
						type="text"
						id="name"
						name="name" 
						onChange={handleChange}
						value={memoryFormData.name}
					/>
				</Col>
				</Form.Group>

				<Form.Group controlId="formGroupContent">
					<Col md>
					<label>Years Lived</label>
						<input 
							type="text" 
							id="yearsLived"
							name="yearsLived" 
							onChange={handleChange}
							value={memoryFormData.yearsLived}			
						/>
					</Col>
				</Form.Group>

				<Form.Group controlId="formGroupContent">
					<Col md>
					<label>What do you want to remember about them?</label>
						<input 
							type="text" 
							id="about"
							name="about" 
							onChange={handleChange}
							value={memoryFormData.about}			
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

const mapStateToProps = state => {
  return { 
  	memoryFormData: state.memoryFormReducer,
  	currentUserId: state.authReducer.currentUser.id
  }
}

export default connect(mapStateToProps, { createMemory, updateMemoryForm })(createMemoryForm)
