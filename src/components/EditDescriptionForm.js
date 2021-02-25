import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateDescription } from '../actions/auth.js'
import { updateDescriptionForm, setDescriptionDataForEdit, resetDescriptionForm }  from '../actions/descriptionForm.js'
import { Link  } from 'react-router-dom'
import { Container, Button, Form } from 'react-bootstrap'

import styled from 'styled-components' //needed? 
	const Styles = styled.div`
	a {
			color: black;
		}
`

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
		const { updateDescription } = this.props
		const { name, value } = event.target
		updateDescriptionForm(name, value)
	}

	handleSubmit = (e) => {
		const { descriptionFormData, updateDescription, history, currentUser } = this.props
		const { id } = currentUser
		console.log("id:", id)
		e.preventDefault()
		updateDescription({
			...descriptionFormData, 
			id,
		}, history)
	}
	
	render() {
		const { currentUser, descriptionFormData, updateDescription, history} = this.props
		const { id, description } = currentUser
		console.log("des:", description)
	return (
		<Styles>
		<div className="edit-description-card">
			<Container fluid>
			<Form> 
				
				<Form.Group>
				
					<Form.Label>Would you like to edit your description? </Form.Label>
					<Form.Control as="textarea" rows={3}

						type="textarea"
						name="description" 
						value={description}
						onChange={this.handleChange}
						
						>
					</Form.Control>
			
				</Form.Group>
				<Button variant="light" onClick={this.handleSubmit}>Save</Button>
				
			</Form>
			<Button variant="light">
			   <Link to={'/profile'}>Return to profile</Link>
			</Button>
			</Container>
		</div>
		</Styles>
		)
	}
}

//feature: add public/private boolean 
const mapStateToProps = state => {
  return { 
  	descriptionFormData: state.descriptionFormReducer.description,
  	currentUser: state.authReducer.currentUser
  }
}

export default connect(mapStateToProps, { updateDescription, setDescriptionDataForEdit, resetDescriptionForm  })(EditDescriptionForm)
						// placeholder="What brought you here? Who have you lost?"

// <input
// 						placeholder="text"
// 						type="textarea"
// 						id="text"
// 						name="text" 
// 						onChange={this.handleChange}
// 						value={description}
// 					/>

// <InputGroup>
// 				    <InputGroup.Prepend>
// 				      <InputGroup.Text>With textarea</InputGroup.Text>
// 				    </InputGroup.Prepend>
// 				    <FormControl as="textarea" aria-label="With textarea" />
// 				  </InputGroup>
//needs prepopulated form,
// const mapStateToProps = state => {
// 	return ({
// 		description: state.authReducer.currentUser.description
// 	})
// }
