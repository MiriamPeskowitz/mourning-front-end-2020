import { resetEntryForm } from "./entryForm"
// import { updateEntryForm } from "./entryForm"


export const entriesLoading = () => {
	console.log('got to LOADING_ENTRIES')
	return {
		type: "LOADING_ENTRIES",
	}
}

export const setEntries = entries => {
		return	{
			  type: "ENTRIES_LOADED", 
			  payload: entries.data
			}
}

export const addEntry = newEntry => {
	console.log('got to addNewEntry this is the payload', newEntry)
	return {
		type: "ADD_NEW_ENTRY",
		payload: newEntry
	}
}

// fix this entryId or entrydata
export const entryUpdateIsSuccessful = entry => {
	console.log("got to entryUpdateIsSuccessful, entry:", entry)
	return {
		type: "UPDATE_ENTRY",
		entry
	}
}

export const deleteEntryIsSuccessful = (entryId) => {
		console.log("got to deleteEntryIsSuccessful")
	return {
		type: "DELETE_ENTRY",
		entryId
	}
}

// refactor? same as resetEntries ? 
export const clearEntries = () => {
	console.log("got to clearEntries")
	return {
		type: "CLEAR_ENTRIES"
	}
}

export const getEntries = () => {
	return (dispatch) => {
		return fetch("/entries", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
		.then(dispatch(entriesLoading()))
		.then(res => res.json())
		.then(entries => {
			if (entries.error) {
			alert(entries.error)
			} else {		
			dispatch(setEntries(entries))
			dispatch(resetEntryForm())
			}
		})
		.catch(err => console.log(err))
	}
}


export const createEntry = (entryData, history) => {

	return (dispatch) => {
		const sendableEntryData = {
      title: entryData.entryFormData.title,
			content: entryData.entryFormData.content,
      user_id: entryData.currentUserId
    }
   
			 // public: formData.public
  			 //date? or take from date-create on the back end 	
  	
		const config = {
			method: 'POST',
			credentials: "include",
			headers: {
			 'Content-Type': 'application/json',
			  "Accept": 'application/json'
				},
			body: JSON.stringify(sendableEntryData)
		}

		return fetch( "/entries", config)
		.then(response => response.json())
		.then(entry => {
			console.log('entry in addNewEntry.data', entry.data.attributes)
			dispatch(addEntry(entry.data.attributes))
			dispatch(resetEntryForm())
			history.push(`/entries/${entry.data.id}`)
		}
	)
	.catch(err => console.log(err))
	}
}


export const updateEntryForm = (entryData, history ) => {
	console.log("got to action creator, entryData: ", entryData)
	return dispatch => {
		const sendableEntryData = {
      title: entryData.title,
			content: entryData.content,
      user_id: entryData.currentUserId
    }
    // console.log("sendableEntryData: ", sendableEntryData)

		const config = {
			method: 'PATCH',
			credentials: "include",
			headers: {
			 'Content-Type': 'application/json',
			  "Accept": 'application/json'
				},
			body: JSON.stringify(sendableEntryData)
		}

		return fetch( `/entries/${entryData.id}`, config)
		.then(response => response.json())
		.then(entry => {
			if (entry.error) {
				alert(entry.error)
			} else {
			console.log('updatedEntry.data', entry.data.attributes)
			// dispatch(addEntry(entry.data.attributes))
			dispatch(entryUpdateIsSuccessful(entry.data.attributes))
			dispatch(resetEntryForm())
			//figure out which is string or int, use int 
			// console.log(entry.data.id)
			// console.log(entry.data.attributes.id)
			history.push(`/entries/${entry.data.attributes.id}`)
			
			}
		})
	.catch(err => console.log(err))
	}
}

export const deleteEntry = (entryId, history) => {
	return dispatch => {
		const config = {
			method: "DELETE",
			credentials: "include",	
			headers: {
				"Content-Type": "application/json"
			},
		}

		return fetch(`/entries/${entryId}`, config)
		.then(response => response.json())
		.then(resp => {
		// 	if (resp.error) {
		// 		alert(resp.error)
		// 	} else {
				dispatch(deleteEntryIsSuccessful(entryId))
				history.push('/profile')
			})
		}
	}
