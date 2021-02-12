import { UPDATE_SIGNUP_FORM, RESET_SIGNUP_FORM } from "../actions/types"

const initialState = {
      username: "",
    	email: "",
      description: "",
      password: "",
      password_confirmation: "",
    } 

export default(state=initialState, action) => {
	switch (action.type) {
		case UPDATE_SIGNUP_FORM:
			return action.formData
		
		case RESET_SIGNUP_FORM:
			return initialState
		
		default:
			return state
	}
}
