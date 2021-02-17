
import { UPDATE_MEMORY_FORM, RESET_MEMORY_FORM } from "../actions/types"

const initialState = {
	name: "Roz", 
	years: "",
	image: "",
	notes: "my grandmother"
	}

export default(state=initialState, action) => {
	switch (action.type) {
		case  UPDATE_MEMORY_FORM:
		  const returnVal = {
       ...state,
        [action.formData.name]: action.formData.value
      }
      return returnVal;
		
		case RESET_MEMORY_FORM:
		  return initialState

		default:
			return state
	}
}