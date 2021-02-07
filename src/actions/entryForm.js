//entryForm actions to control entry data in store
//see actions/entries.js for REST actionCreators 

//called in CreateEntryForm/handleChange
export const updateNewEntryForm = (name, value) => {
	// console.log("got to updateNewEntryForm, entryId:", name, value)
	const formData= {
		name: name, 
		value: value}
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

