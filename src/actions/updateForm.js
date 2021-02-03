// actions for updating an entry


export const setFormDataForEdit = (entry)  => {
	const entryFormData = {
		title: entry.title,
		content: entry.content,
		id: entry.id,
		userid: entry.userId
	}
	console.log("entryFormData variable: ", entryFormData)
	return {
		type: "SET_FORM_DATA_FOR_EDIT",
		payload: entryFormData
	}
}