import { SET_FORM_DATA_FOR_EDIT, UPDATE_EDITED_ENTRY, RESET_EDIT_FORM } from "../actions/types"

const initialState = {
	title: '',
	content: '',
	id: '',
}
export default(state = initialState, action) => {
	switch(action.type) {
		case SET_FORM_DATA_FOR_EDIT:
			return action.payload
		
		case UPDATE_EDITED_ENTRY:
      const returnVal = {
       ...state,
        [action.formData.name]: action.formData.value
      }
      return returnVal;

		case RESET_EDIT_FORM:
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
