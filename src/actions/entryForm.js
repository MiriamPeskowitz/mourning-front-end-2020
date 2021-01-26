//entryForm actions to control entry data in store
//see actions/entries.js for REST actionCreators 

//called in CreateEntryForm/handleChange
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




// export const setFormDataForEdit = trip => {
//   const tripFormData = {
//     name: trip. .attributes.name,
//     startDate: trip.attributes.start_date,
//     endDate: trip.attributes.end_date
//   }
//   return {
//     type: "SET_FORM_DATA_FOR_EDIT",
//     tripFormData
//   }
// }
