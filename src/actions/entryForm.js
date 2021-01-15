//entryForm actions to control entry data in store

export const updateEntryForm = formData => {
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

