//holds login/logout and actions related to current user 
//adding, updating, deleting pieces of their profile 
const initialState = { 
	currentUser: 
		{ entries: [], loading: false} }

export default(state = initialState, action) => {
	switch(action.type){

// login => sets current user
		case "SET_CURRENT_USER":
			return {
				currentUser: action.payload,
				loading: false
			}
		case "LOADING_CURRENT_USER":
			return {
				...state, 
				loading: true
			}

//logout => clears current user on front end 
		case "CLEAR_CURRENT_USER":
			console.log("current user cleared")
			return {
				currentUser: ""
			}
		case "ADD_NEW_ENTRY":		
			return {
				...state,
				entries: [...state.currentUser.entries, action.payload]
			}
			case "CLEAR_ENTRIES":
			console.log("entries cleared")
			return initialState

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


