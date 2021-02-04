import React, {Component} from 'react'
import { connect } from 'react-redux'

import { updateEntryForm, deleteEntry } from '../actions/entries.js'
import { setFormDataForEdit, updateEditedEntryToReducer, resetEditForm }  from '../actions/updateForm.js'

// changeUpdatedEntryForm 
class UpdateEntryForm extends Component {
	// take the data sent over by the router -- entry -- 
	//and send it to setFormDataForEntry, to load the reducer
	//which then lets us call mapstatetoprops and get data
	// from the store to fill the fields. 

	componentDidMount() {
		// console.log("CDM setFormDataForEdit", this.props.entry )
		this.props.entry && this.props.setFormDataForEdit(this.props.entry)
	}

	componentDidUpdate(previousProps) {
		this.props.entry && !previousProps.entry && this.props.setFormDataForEdit(this.props.entry)
	}

	componentWillUnmount() {
		this.props.resetEditForm()
	}
	
	handleChange=(event) => {
		event.preventDefault()
		const { updateFormData } = this.props
		const { updateEditedEntryToReducer } = this.props
		const {name, value } = event.target
		updateEditedEntryToReducer(name, value)
	}
	// handleChange = (e) => {
	// 		const { name, value } = e.target
	// 		const { updateFormData } = this.props
	// 		const { updateEditedEntryToReducer } = this.props
	// 		// console.log("name, value in handleChange:", name, value)
			
	// 		const formInfo = {
	// 		...updateFormData,
	// 			[name]: value
	// 		}
	// 		// console.log('formInfo', formInfo)
	// 		updateEditedEntryToReducer(formInfo) 
	// }
//so, cl in action/reducer says ok, but not changing value field 

	// const handleChange = (e) => {
	// 	const updatedFormInfo = {
	// 		...loginFormData,
	// 		[e.target.name]: e.target.value
	// 	}
	// 	updateLoginForm(updatedFormInfo)
	// }

	handleSubmit = (e, updateFormData) => {
		const { updateEntryForm, entry, history, currentUserId } = this.props
		
		e.preventDefault()

		updateEntryForm({    
			...updateFormData,
			entryId: entry.id,
			currentUserId
		}, history)
	}
	
	render()  {
		const { updateFormData,  deleteEntry, history } = this.props
		// console.log("entry in render:", entry)
		// console.log("updateFormData.content in render:", updateFormData.content)
		// console.log("updateFormData.title in render:", updateFormData.title)
		// console.log("updateFormData.id in render:", updateFormData.id)
		// console.log("updateFormData in render:", updateFormData)

		const {title, content, id } = updateFormData
		// console.log("title, content in render, destructred", title, content)
		return (
			<div className="UpdateEntryForm">
				<h3>Form for Editing an Entry</h3>
				<form onSubmit={this.handleSubmit}> 
					<div>
						<input 
							placeholder={title}
							type="text"
							name="title" 
							value={title}
						 	onChange={this.handleChange}
	
						/>
					</div>
					<div>
						<input 
							placeholder={content}
							type="text" 
							name="content" 
							onChange={this.handleChange}
							value={content}
							
							
						/>
					</div>

					<br/>
					<input 
						type="submit" 
						value="Save changes" 
					/>
				</form>
				<button onClick={()=>deleteEntry(id, history)}>Delete entry</button>
			</div>
		)
	}
}

const mapStateToProps = state => {

  return { 
  	updateFormData: state.updateFormReducer,
  	currentUserId: state.authReducer.currentUser.id
  	}
	}

export default connect(mapStateToProps, { setFormDataForEdit, updateEditedEntryToReducer, updateEntryForm, deleteEntry, resetEditForm })(UpdateEntryForm)




