//keeps loginform data in store, not local data 

const initialState = {
	username: "", 
	password: "",
}

export default(state=initialState, action) => {
	switch (action.type) {
		case "RESET_LOGIN_FORM":
			return initialState
		default:
			return state
	}
}