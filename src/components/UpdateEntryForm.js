import React, {Component} from 'react'
import { connect } from 'react-redux'

import { updateEntry, entryUpdateIsSuccessful } from '../actions/entries.js'
import { setFormDataForEdit, updateEntryForm, resetEntryForm }  from '../actions/entryForm.js'

// changeUpdatedEntryForm 
class UpdateEntryForm extends Component {
	componentDidMount() {
		const { entryFormData } = this.props
		console.log("CDM setFormDataForEdit", this.props.entryFormData )
		this.props.setFormDataForEdit(entryFormData)
	}

	componentDidUpdate(previousProps) {
		this.props.entry && !previousProps.entry && this.props.setFormDataForEdit(this.props.entry)
	}

	componentWillUnmount() {
		this.props.resetEntryForm()
	}
	
	handleChange = (e) => {
		console.log("handle change:", e)


		const updatedFormInfo = {
			[e.target.name]: e.target.value
		// 	...entryFormData,
		// 	[e.target.name]: e.target.value
		}
		console.log("handle change/updatedFormInfo:", updatedFormInfo)
		updateEntryForm(updatedFormInfo) //make this function 
	}

	handleSubmit = (e, entryFormData) => {
		const {updateEntry, entry, history } = this.props
		e.preventDefault()

		updateEntry({    
			...entryFormData, 
			entryId: entry.id
		}, history)
	}
	
	render()  {
		const { entry, history, deleteEntry } = this.props
	

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
							value={entry.title}
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
  	entryFormData: state.entryFormReducer,
  	currentUserId: state.authReducer.currentUser.id
  	}
	}

export default connect(mapStateToProps, { setFormDataForEdit, updateEntryForm, resetEntryForm, updateEntry, entryUpdateIsSuccessful })(UpdateEntryForm)




