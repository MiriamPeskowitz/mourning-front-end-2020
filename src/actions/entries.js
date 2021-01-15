import { resetEntryForm } from "./entryForm"

const getEntries = () => {
	return (dispatch) => {
		dispatch({type: "LOADING_ENTRIES"})
		return fetch("/entries")
		.then(res => res.json())
		.then(entries => {			
			dispatch({
			  type: "ENTRIES_LOADED", 
			  payload: entries.data
			})
		})
	}
}
export default getEntries

//create a single entry, linked to currentUser
export const createEntry = (formData, history) => {
	console.log("New Entry: ", formData)
	return (dispatch) => {
		const config = {
			method: 'POST',
			credentials: "include",
			headers: {
			 'Content-Type': 'application/json',
			  "Accept": 'application/json'
				},
			body: JSON.stringify({formData})
			}
		return fetch( "/entry", config)
		.then(response => response.json())
		.then((entry) => console.log("payload:newEntry: ", entry))
		.then((entry) => {
			if (entry.error) {
				alert(entry.error)
			} else {
				console.log("New Entry: ", entry)
				//decide what I want to do with it -- put in DOM somewhere 
				// dispatch(setCurrentUser(user.data))
				dispatch(resetEntryForm())
				history.push('/profile')
			}
		})
		.catch(error=> console.log("from actions/entryForm.js: createEntry didn't work"))
	}
}
