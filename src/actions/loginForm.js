// action creators for controlling state related 
// to the signup form fields 

export const updateLoginForm = formData => {
	return {
		type: "UPDATE_LOGIN_FORM",
		formData
	}
}

export const resetLoginForm = () => {
	return {
		type: "RESET_LOGIN_FORM"
	}
}
