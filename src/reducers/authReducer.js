
export default(state = null, action) => {
	switch(action.type){

		
		case "NEW_USER_CREATED":
			console.log('got to auth reducer new user created-- user')
			return {
					...state,
					currentUser: action.payload
				}

// login => sets current user
			case "SET_CURRENT_USER":
			return {
				currentUser: action.user
			}
		
//case "CLEAR_CURRENT_USER";
		// return null


		// case "CREATE_USER_ERROR": 
		// 		console.log('create user error') 
		// 	  return {
		// 	  	isLoggedIn: false
		// 	  }
				
		// case "LOGIN_COMPLETE":
		// 	console.log('got to auth reducer login ', action.payload)
		// 	return {
		// 		...state, 
		// 		currentUser
		// 	}

		case "LOGOUT":
			return {
				...state
			}

		


		default:
			return state
	}
}



//moved to auth for now 
		// case "SET_CURRENT_USER":
		// 	return action.user