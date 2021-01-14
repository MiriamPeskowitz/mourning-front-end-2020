
export default(state = {currentUser: ""}, action) => {
	switch(action.type){

		//check all the payloads 
		
// login => sets current user
			case "SET_CURRENT_USER":
			return {
				currentUser: action.payload	
				// currentUser: action.payload.attributes
			}

		case "CLEAR_CURRENT_USER":
			console.log("current_user_cleared")
			return {
				currentUser: ""
			}
		default:
			return state
	}
}


// const initialState={
// 	currentUser = {
// 		username: "",
// 		id: 
// 	}
// }
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


//moved to auth for now 
		// case "SET_CURRENT_USER":
		// 	return action.user