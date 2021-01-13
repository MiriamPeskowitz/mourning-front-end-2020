
export default(state = null, action) => {
	switch(action.type){

		case "ADDING_NEW_USER":
			console.log("got to adding new user in reducer")
			return {
				...state,
				
		}

		case "NEW_USER_CREATED":
			console.log('got to auth reducer new user created-- user')
			return {
					...state,
					currentUser: action.payload
				}

// login => sets current user
			case "SET_CURRENT_USER":
			return action.user
		
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



//moved to auth, for now 

// export default (state = null, action) => {
// 	switch(action.type) {

	

// 		default:
// 			return state
// 	}

// }



//moved to auth for now 
		// case "SET_CURRENT_USER":
		// 	return action.user