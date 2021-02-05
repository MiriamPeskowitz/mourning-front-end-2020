//this reducer is for loading entries to home page
//add/update/delete functions are in authReducer
export default(state = {entries: [], loading: false}, action) => {
	switch(action.type){
		case "LOADING_ENTRIES":
			return {
				...state,
				// loading: true
			}	
		case "ENTRIES_LOADED":
			return {
				...state,
				entries: action.payload,
				loading: false
			}
		// case "UPDATE_ENTRY":
		// 	return state.map(entry => entry.id === action.entryIdd ? action.entry : entry)
			
		case "CLEAR_ENTRIES":
				console.log("entries cleared")
				return state

		default:
			return state
	}
}
//think about what I'm sending to update_entry, and how to structure 

//may need to change, simi to addNewEntry currentUser : {}
			// case "UPDATE_ENTRY":
			// 		...state,
			// 		currentUser: {
			// 			state.currentuser,
			// 		}
			// 	return state.map(entry => entry.id === action.entryIdd ? action.entry : entry)
			
			// case "DELETE_ENTRY":
			// 	return state.filter(entry => entry.id === action.entryId ? false: true)
