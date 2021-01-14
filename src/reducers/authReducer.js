
export default(state = { currentUser: "" }, action) => {
	switch(action.type){

// login => sets current user
			case "SET_CURRENT_USER":
			console.log("reducer currentUser: ", action.payload)
			return {
				currentUser: action.payload	
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

