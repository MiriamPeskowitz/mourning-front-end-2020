//entryForm actions to control entry data in store
//see actions/entries.js for REST actionCreators 

//called in CreateEntryForm/handleChange
export const updateEntryForm = formData => {
	return {
		type: "UPDATE_ENTRY_FORM",
		formData
	}
}

// export const changeUpdatedEntryForm = formData => {
// 	type: "CHANGE_UPDATED_ENTRY_FORM", 
// 	formData
// }

export const resetEntryForm = () => {
	return {
		type: "RESET_ENTRY_FORM",
	}
} 

export const setFormDataForEdit = (entry)  => {
	const entryFormData = {
		title: entry.title,
		content: entry.content,
		id: entry.id,
		userid: entry.userId
	}
	return {
		type: "SET_FORM_DATA_FOR_EDIT",
		entryFormData
	}
}
