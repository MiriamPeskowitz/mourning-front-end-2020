//keeps entryform data in store, not local data 
const initialState={
	title: "", 
	content: ""
	}

export default(state=initialState, action) => {
	switch (action.type) {
		case  "UPDATE_ENTRY_FORM":
		  return action.formData 
		// case "CHANGE_UPDATED_ENTRY_FORM":
		// 	return action.formData
		case "RESET_ENTRY_FORM":
		  return initialState
		case "SET_FORM_DATA_FOR_EDIT":
			return action.entryFormData
		default:
			return state
	}
}

//combine updateentry and updateEditEntry if the same thing 