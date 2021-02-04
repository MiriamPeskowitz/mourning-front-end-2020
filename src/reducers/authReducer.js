//holds login/logout and actions related to current user 
//adding, updating, deleting pieces of their profile 
const initialState = { 
	currentUser: {
		username: '',
		email: '',
		description: '',
		id: '',
		entries: [],
		// loading: false
	 }
	}

export default(state = initialState, action) => {
	switch(action.type){

// login => sets current user
		case "SET_CURRENT_USER":
			return {
				currentUser: action.payload,
				// loading: false
			}
		case "LOADING_CURRENT_USER":
			return {
				...state, 
				// loading: true
			}

//logout => clears current user on front end 
		case "CLEAR_CURRENT_USER":
			console.log("current user cleared")
			return {
				currentUser: ""
			}

		case "ADD_NEW_ENTRY":	
			console.log("entry payload in reducer:", action.payload)	
			
			const entry = {
				id: action.payload.id,
				title: action.payload.title,
				content: action.payload.content,
			}
			return {
				...state, 
				currentUser: {
					...state.currentUser,
					entries: state.currentUser.entries.concat(entry)
				}
			}

//may need to change, simi to addNewEntry currentUser : {}
			// case "UPDATE_ENTRY":
			// 	return state.map(entry => entry.id === action.entryIdd ? action.entry : entry)
			
			// case "DELETE_ENTRY":
			// 	return state.filter(entry => entry.id === action.entryId ? false: true)
				
		
			case "CLEAR_ENTRIES":
				console.log("entries cleared")
				return initialState

			default:
				return state
		}
}
