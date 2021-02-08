export const setFormDataForEdit = (entry)  => {
	const entryFormData = {
		title: entry.title,
		content: entry.content,
		id: entry.id,
		userid: entry.userId
	}
	return {
		type: "SET_FORM_DATA_FOR_EDIT",
		payload: entryFormData
	}
}

export const updateEditedEntryToReducer = (name, value) => {
	const formData = {
			name: name,
			value: value
		}
	return {
		type: "UPDATE_EDITED_ENTRY",
		formData
	}
}

export const resetEditForm = () => {
	return {
		type: "RESET_EDIT_FORM",
	}
} 

