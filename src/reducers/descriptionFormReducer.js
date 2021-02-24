import { SET_DESCRIPTION_DATA_FOR_EDIT, UPDATE_DESCRIPTION_FORM, RESET_DESCRIPTION_FORM } from "../actions/types"

const initialState = ""

export default(state=initialState, action) => {
	switch (action.type) {

		case  UPDATE_DESCRIPTION_FORM:
		//simpler -- just data, simple string 
		  const returnVal = {
       ...state,
        [action.formData.name]: action.formData.value
      }
      return returnVal;
		
		case RESET_DESCRIPTION_FORM:
		  return initialState

		default:
			return state
	}
}