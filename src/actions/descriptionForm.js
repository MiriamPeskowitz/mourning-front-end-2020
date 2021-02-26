
export const setDescriptionDataForEdit = (data) => {
	return {
		type: "SET_DESCRIPTION_DATA_FOR_EDIT",
		payload: data
	}
}


// export const updateNewEntryForm = (name, value) => {
// 	const formData= {
// 		name: name, 
// 		value: value
// 	}
// 	return {
// 		type: "UPDATE_ENTRY_FORM",
// 		formData
export const sendUpdatedDescriptionToReducer = (name, value) => {
	const formData = { name, value }
	console.log("formData", formData)
	return {
		type: "UPDATE_DESCRIPTION_FORM",
		formData
	}
}

export const resetDescriptionForm = () => {
	return {
		type: "RESET_DESCRIPTION_FORM",
	}
} 

