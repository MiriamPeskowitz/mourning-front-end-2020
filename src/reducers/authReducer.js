
const INITIAL_STATE = {
	// isAuthenticated: false,
	currentUser: {}
}

export default(state = INITIAL_STATE, action) => {
	switch(action.type){
		case "NEW_USER_CREATED_AUTH_TOBE_ADDED_HERE":
			
				console.log('got to auth reducer')
				// ...state,
				// currentUser: action.user,
				// isAuthenticated: true
			
		default:
			return state
	}
}