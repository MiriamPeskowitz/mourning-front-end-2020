import React from 'react'
import { connect } from 'react-redux'
import { createMemory } from '../actions/memories'
import { updateNewMemoryForm } from '../actions/memoryForm'
import { Button, Form, Col } from 'react-bootstrap'

const CreateMemoryForm = ({memoryFormData, currentUserId, createMemory, updateNewMemoryForm, history}) => {
	
	const handleChange = (event) => {
		const {name, value } = event.target
		updateNewMemoryForm(name, value)
	}

	const handleSubmit = (event) => {
		event.preventDefault() 
		createMemory({
			memoryFormData,
			currentUserId
		}, history)
	}


	return (	
		<div className="login">
			<h3>Create a Memory</h3>
			<form onSubmit={handleSubmit}> 
				
				<Form.Group row controlId="formGroupTitle">
					<Col md>
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

				<Form.Group row controlId="formGroupContent">
					<Col md>
						<input 
							placeholder="years"
							type="text" 
							id="text"
							name="years" 
							onChange={handleChange}
							value={memoryFormData.years}			
						/>
					</Col>
				</Form.Group>

				<Form.Group row controlId="formGroupContent">
					<Col md>
						<input 
							placeholder="notes"
							type="text" 
							id="text"
							name="notes" 
							onChange={handleChange}
							value={memoryFormData.notes}			
						/>
					</Col>
				</Form.Group>

				<Form.Group row controlId="formGroupContent">
					<Col md>
						<input 
							placeholder="image"
							type="text" 
							id="text"
							name="image" 
							onChange={handleChange}
							value={memoryFormData.image}			
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
export default connect(mapStateToProps, { createMemory, updateNewMemoryForm})(CreateMemoryForm)