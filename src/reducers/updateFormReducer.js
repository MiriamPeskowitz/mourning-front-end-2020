// const initialState = {
// 	title: entryFormData.title, 
// 	content: entryFormData.content,
// 	id: entryFormData.id
// 	}

const initialState = {
	title: '',
	content: '',
	id: '',
}
export default(state = initialState, action) => {
	switch(action.type) {
		case "SET_FORM_DATA_FOR_EDIT":
			console.log('got to reducer for Set Form Data  entryFormData', action.payload)
			return action.payload
			//add what I need here. state, plus the changes
		case "UPDATE_EDITED_ENTRY":
			console.log("Got to REDUCER state", state)
			console.log("Got to REDUCER name", action.payload.name)
			console.log("Got to REDUCER value", action.payload.value)
		  const val=  {
	 			 ...state,
        [action.payload.name]: action.payload.value
      }
      return val
		case "RESET_EDIT_FORM":
			return initialState
		default: 
			return state
	}
}


// export default(state=initialState, action) => {
// 	switch (action.type) {
// 		case  "UPDATE_ENTRY_FORM":
// 		  return action.formData 
// 		// case "CHANGE_UPDATED_ENTRY_FORM":
// 		// 	return action.formData
// 		case "RESET_ENTRY_FORM":
// 		  return initialState


// 	}
// }
