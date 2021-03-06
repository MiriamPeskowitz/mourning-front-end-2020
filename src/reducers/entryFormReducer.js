import { UPDATE_ENTRY_FORM, RESET_ENTRY_FORM } from "../actions/types"

const initialState = {
	title: "", 
	content: ""
	}

export default(state=initialState, action) => {
	switch (action.type) {
		case  UPDATE_ENTRY_FORM:
		  const returnVal = {
       ...state,
        [action.formData.name]: action.formData.value
      }
      return returnVal;
		
		case RESET_ENTRY_FORM:
		  return initialState

		default:
			return state
	}
}
