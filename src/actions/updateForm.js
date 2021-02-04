// actions for updating an entry


export const setFormDataForEdit = (entry)  => {
	console.log('SFDDEdit-entry', entry)
	const entryFormData = {
		title: entry.title,
		content: entry.content,
		id: entry.id,
		userid: entry.userId
	}
	// console.log("entryFormData variable: ", entryFormData)
	return {
		type: "SET_FORM_DATA_FOR_EDIT",
		payload: entryFormData
	}
}

//make sure this is doing what i want" 
export const updateEditedEntryToReducer = formData => {
	console.log("ACTION got to updateEditEntryToReducer, formData:", formData)
	return {
		type: "UPDATE_EDITED_ENTRY",
		payload: formData
	}
}

export const resetEditForm = () => {
	return {
		type: "RESET_EDIT_FORM",
	}
} 

