import {  UPDATE_DESCRIPTION_FORM, RESET_DESCRIPTION_FORM } from "../actions/types"

const initialState = { description: ''}

export default(state=initialState, action) => {
	switch (action.type) {

		case  UPDATE_DESCRIPTION_FORM:
				
		console.log("got to reducer")
		  const returnVal = {
		  	 ...state,
        [action.formData.name]: action.formData.value
      }
      console.log("returnVal", returnVal)
      return returnVal;
		
		case RESET_DESCRIPTION_FORM:
		  return initialState

		default:
			return state
	}
}