//holds login/logout and actions related to current user 
//adding, updating, deleting pieces of their profile 
export default(state = { currentUser: { entries: []} }, action) => {
	switch(action.type){

// login => sets current user
			case "SET_CURRENT_USER":
			console.log("reducer currentUser: ", action.payload)
			return {
				currentUser: action.payload	
			}
		
//logout => clears current user on front end 
		case "CLEAR_CURRENT_USER":
			console.log("current_user_cleared")
			return {
				currentUser: ""
			}
		case "ADD_NEW_ENTRY":
			console.log("add new entry reducer:", action.payload);
		
			return {
				...state,
				entries: [...state.currentUser.entries, action.payload]
			}

		default:
			return state
	}
}

 // this should be authEntriesREducer 
 // entriesReducer should be allEntriesREducer 

		// case "UPDATE_ENTRY":
		// 	return {
		// 		entries: state.map(entry => entry.id === action.updatedEntry.id ? action.updatedEntry : entry)
		// 	}	


