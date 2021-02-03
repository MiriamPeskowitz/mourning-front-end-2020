import React, {Component} from 'react'
import { connect } from 'react-redux'

import { updateEntry, entryUpdateIsSuccessful, deleteEntry } from '../actions/entries.js'
import { updateEntryForm, resetEntryForm }  from '../actions/entryForm.js'
import { setFormDataForEdit}  from '../actions/updateForm.js'

// changeUpdatedEntryForm 
class UpdateEntryForm extends Component {
	componentDidMount() {
		const { entryFormData } = this.props
		console.log("CDM setFormDataForEdit", this.props.entryFormData )
		this.props.setFormDataForEdit(this.props.updateFormData)
	}

	// componentDidUpdate(previousProps) {
	// 	this.props.entry && !previousProps.entry && this.props.setFormDataForEdit(this.props.entry)
	// }

	// componentWillUnmount() {
	// 	this.props.resetEntryForm()
	// }
	
	handleChange = (e) => {
			const { name, value } = e.target
			const updateFormData = this.props
			const updatedFormInfo = {
				...updateFormData,
				[name]: value
			}
			updateEntryForm(updatedFormInfo) 
	}


	// const handleChange = (e) => {
	// 	const updatedFormInfo = {
	// 		...loginFormData,
	// 		[e.target.name]: e.target.value
	// 	}
	// 	updateLoginForm(updatedFormInfo)
	// }

	handleSubmit = (e) => {
		const {updateEntry, entryFormData, history } = this.props
		
		e.preventDefault()

		updateEntry({    
			...entryFormData
		}, history)
	}
	
	render()  {
		const { entry, entryFormData, history, deleteEntry } = this.props
		console.log("entry in render:", entry)
		console.log("entry.content in render:", entry.content)
		console.log("entryFormData.title in render:", entry.title)
		console.log("entry.id in render:", entry.id)
		console.log("entryFormData in render:", entryFormData)

		return (
			<div className="UpdateEntryForm">
				<h3>Form for Editing an Entry</h3>
				<form onSubmit={this.handleSubmit}> 
					<div>
						<input 
							placeholder={entry.title}
							type="text"
							name="title" 
							onChange={this.handleChange}
							value={entryFormData.title}
						/>
					</div>
					<div>
						<input 
							placeholder={entry.content}
							type="text" 
							name="content" 
							onChange={this.handleChange}
							value={entry.content}
						/>
					</div>
					<br/>
					<input 
						type="submit" 
						value="Save changes" 
					/>
				</form>
				<button onClick={()=>deleteEntry(entry.id, history)}>Delete entry</button>
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

export default connect(mapStateToProps, { setFormDataForEdit, updateEntryForm, deleteEntry, resetEntryForm, updateEntry, entryUpdateIsSuccessful })(UpdateEntryForm)




