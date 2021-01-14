// action creators for controlling state related 
// to the signup form fields 

export const updateSignupForm = formData => {
	return {
		type: "UPDATE_SIGNUP_FORM",
		formData
	}
}

export const resetSignupForm = () => {
	return {
		type: "RESET_SIGNUP_FORM"
	}
}

