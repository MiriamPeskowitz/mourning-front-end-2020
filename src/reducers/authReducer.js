
const INITIAL_STATE = {
	loading: false,
	isLoggedIn: false,
	currentUser: {}
}

export default(state = INITIAL_STATE, action) => {
	switch(action.type){

		case "ADDING_NEW_USER":
			console.log("got to adding new user in reducer")
			return {
				...state,
				loading: true,
				isLoggedIn: false
		}

		case "NEW_USER_CREATED":
			console.log('got to auth reducer new user created ')
			return {
					...state,
					isLoggedIn: true,
					currentUser: action.payload
				}
			case "CREATE_USER_ERROR": 
				//add console.log or alert here? 
			  return {
			  	isLoggedIn: false
			  }
				
		
		case "LOGIN_AUTHORIZATION_COMPLETE":
			console.log('got to auth reducer login ')
			return {
				...state, 
				isLoggedIn: true,
				currentUser: action.payload
			}

		case "LOGOUT":
			return {
				...state, 
				isLoggedIn: false, 
				currentUser: {}
			}

		default:
			return state
	}
}