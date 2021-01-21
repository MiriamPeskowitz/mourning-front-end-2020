
export default(state = { currentUser: { entries: []} }, action) => {
	switch(action.type){

// login => sets current user
			case "SET_CURRENT_USER":
			console.log("reducer currentUser: ", action.payload)
			return {
				currentUser: action.payload	
			}
			//add only the values I want here 
//logout => clears current user on front end 
		case "CLEAR_CURRENT_USER":
			console.log("current_user_cleared")
			return {
				currentUser: ""
			}
		default:
			return state
	}
}

