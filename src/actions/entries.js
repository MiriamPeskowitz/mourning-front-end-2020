import { resetEntryForm } from "./entryForm"

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
	return {
		type: "ADD_NEW_ENTRY",
		payload: newEntry
	}
}


export const entryUpdateIsSuccessful = entry => {
	return {
		type: "UPDATE_ENTRY",
		entry
	}
}

export const deleteEntryIsSuccessful = (id) => {
	return {
		type: "DELETE_ENTRY",
		id
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
     	console.log("sendableEntryData", sendableEntryData)
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
			console.log('entry in addNewEntry.data', entry.data)
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
	return (dispatch) => {
		const sendableEntryData = {
      title: entryData.title,
			content: entryData.content,
      user_id: entryData.currentUserId
    }
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
			dispatch(entryUpdateIsSuccessful(entry.data.attributes))
			dispatch(resetEntryForm())
			history.push(`/entries/${entry.data.attributes.id}`)
			}
		})
	.catch(err => console.log(err))
	}
}

export const deleteEntry = (id, history) => {
	const intId = parseInt(id)
	return dispatch => {
    return fetch(`/entries/${intId}`, {
			credentials: "include",
			method: "DELETE",
			headers: {
				"Content-Type": "application/json"
				}
			}
		)
		.then(response => response.json())
		.then((r) => {
			if (r.error) {
				alert(r.error)
				} else {
				history.push('/profile')
				dispatch(deleteEntryIsSuccessful(id))
			}
		})
		.catch(err => console.log(err))
	}
}

