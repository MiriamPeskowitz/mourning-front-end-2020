//entryForm actions to control entry data in store
//see actions/entries.js for REST actionCreators 

//called in CreateEntryForm/handleChange
export const updateEntryForm = (formData, history) => {
	console.log("got to actions/updateEntryForm", formData)
	return {
		type: "UPDATE_ENTRY_FORM",
		formData
	}
}

export const resetEntryForm = () => {
	return {
		type: "RESET_ENTRY_FORM",
	}
} 

