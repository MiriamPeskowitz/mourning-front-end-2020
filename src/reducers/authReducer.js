
const INITIAL_STATE = {
	loading: false,
	isAuthenticated: false,
	currentUser: {}
}

export default(state = INITIAL_STATE, action) => {
	switch(action.type){

		case "ADDING_NEW_USER":
			console.log("got to adding new user in reducer")
			return {
				...state,
				loading:true
			}

		case "NEW_USER_CREATED":
			console.log('got to auth reducer new user created ')
			return {
					...state,
					isAuthenticated: false				
				}
				
				// ...state,
				// currentUser: action.user,
		
		case "LOGIN_AUTHORIZATION_COMPLETE":
			console.log('got to auth reducer login ')
			return {
				...state, 
				isAuthenticated: true,
				currentUser: action.payload
			}

		case "LOGOUT":
			return {
				...state, 
				isAuthenticated: false, 
				currentUser: {}
			}

		default:
			return state
	}
}