//entryForm actions to control entry data in store
//see actions/entries.js for REST actionCreators 
export const updateNewEntryForm = (name, value) => {
	const formData= {
		name: name, 
		value: value
	}
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

