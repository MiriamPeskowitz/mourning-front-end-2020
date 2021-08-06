import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { updateEntryForm, deleteEntry } from '../actions/entries.js'
import { setFormDataForEdit, updateEditedEntryToReducer, resetEditForm }  from '../actions/updateForm.js'

//try to refactor to hooks 
class UpdateEntryForm extends Component {
	// take the data sent over by the router -- entry -- 
	//and send it to setFormDataForEntry, to load the reducer
	//which then lets us call mapstatetoprops and get data
	// from the store to fill the fields. 

	componentDidMount() {
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
		const { updateEditedEntryToReducer } = this.props
		const {name, value } = event.target
		updateEditedEntryToReducer(name, value)
	}

	handleSubmit = (e, ) => {
		console.log("got to handle submit")
		const { updateFormData, updateEntryForm, history, currentUserId } = this.props
		
		e.preventDefault()

		updateEntryForm({    
			...updateFormData,
			currentUserId
		}, history)
	}
	
	render()  {
		const { updateFormData,  deleteEntry, history } = this.props
		const {title, content, id } = updateFormData
		return (
			<div className="edit-entry-form">
				<h4>Change this entry</h4>
				<form onSubmit={this.handleSubmit}> 
					<label> Title: <br/>
						<input 
							name="title" 
							type="text"
						 	onChange={this.handleChange}
						 	value={title}
						/>
					</label>
					<br />
					<label> Content: <br/>
						<textarea 
							type="text"
							name="content"
							onChange={this.handleChange}
							value={content}
						/>
					</label>
					<br/>
					<input 
						type="submit" 
						value="Save" 
					/>
				</form>
				<footer className="edit-entry-form-footer" >
					<button className='edit-entry-link'  onClick={()=>deleteEntry(id, history)}>Delete Entry</button>
    	  	<span> || </span>
    	  	<button><Link className='edit-entry-link' to={'/profile'} >Back to My Profile</Link></button>
				</footer>
			</div>
		)
	}
}

// <div className="entry-card-buttons-horizontal">
// 	      <Link className='entryLink' to={`/entries/${id}/edit`} >Edit</Link> 
//    			<span>  ||  </span>	
//     	  <Link className='entryLink' to={'/profile'} >Back to My Profile</Link> 	  	
//    		</div>

const mapStateToProps = state => {

  return { 
  	updateFormData: state.updateFormReducer,
  	currentUserId: state.authReducer.currentUser.id
  	}
	}

export default connect(mapStateToProps, { setFormDataForEdit, updateEditedEntryToReducer, updateEntryForm, deleteEntry, resetEditForm })(UpdateEntryForm)

//[placeholder={content}



