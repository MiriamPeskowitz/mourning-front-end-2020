import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateDescription } from '../actions/auth.js'
import { setDescriptionDataForEdit, updateDescriptionForm, resetDescriptionForm }  from '../actions/descriptionForm.js'
import { Link  } from 'react-router-dom'
import { Button, Form, Col } from 'react-bootstrap'

import styled from 'styled-components' //needed? 


// currentUser.description
class EditDescriptionForm extends Component {

	componentDidMount() {
		this.props.description && this.props.setDescriptionDataForEdit(this.props.description)
	}

	componentDidUpdate(previousProps) {
		this.props.description && !previousProps.description && this.props.setDescriptionDataForEdit(this.props.description)
	}

	componentWillUnmount() {
		this.props.resetDescriptionForm()
	}

	handleChange = (event) => {
		event.preventDefault()
		const { name, value } = event.target
		updateDescriptionForm(name, value)
	}

	handleSubmit = (e) => {
		const { descriptionFormData, updateDescription, history, currentUserId } = this.props

		e.preventDefault()
		updateDescription({
			...descriptionFormData, 
			currentUserId,
		}, history)
	}
	
	render() {
		const { descriptionFormData, updateDescription, history} = this.props
	return (
		<div className="description-card">
			<h3>Would you like to edit your description? </h3>
			<form onSubmit={this.handleSubmit}> 
				
				<Form.Group controlId="formGroupText">
					<Col md>
					<input
						placeholder="text"
						type="text"
						id="text"
						name="text" 
						onChange={this.handleChange}
						value={descriptionFormData}
					/>
				</Col>
				</Form.Group>
				<Col>
					<Button>
						<input 
						type="submit" 
						value="Save" 
						/>
					</Button>
					</Col>
			</form>
			<Button>
			   <Link to={'/profile'} >Back to my profile</Link>
			</Button>
		</div>
		)
	}
}

//feature: add public/private boolean 
const mapStateToProps = state => {
  return { 
  	descriptionFormData: state.descriptionFormReducer,
  	currentUserId: state.authReducer.currentUser.id
  }
}

export default connect(mapStateToProps, { updateDescription, resetDescriptionForm, setDescriptionDataForEdit })(EditDescriptionForm)


//needs prepopulated form,
// const mapStateToProps = state => {
// 	return ({
// 		description: state.authReducer.currentUser.description
// 	})
// }
