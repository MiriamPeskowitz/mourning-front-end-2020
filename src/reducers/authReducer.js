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
//think about what I'm sending to update_entry, and how to structure 
//look through all --map
		case "UPDATE_ENTRY":
			// console.log("REDucer-- entry", action.entry);
		 const returnVal =  state.currentUser.entries.map(entry => entry.id === action.entry.id ? action.entry : entry)
		 	
		 return {
		 	...state, 
		 		currentUser: {
		 			...state.currentUser,
		 			entries: returnVal
		 		}
		 }

		case "DELETE_ENTRY":
			const newArray = state.filter((entry) => entry.id === action.entryId ? false : true)
			return {
		 	...state, 
		 		currentUser: {
		 			...state.currentUser,
		 			entries: newArray
		 		}
		 }
			default:
				return state
		}
}
//delete entry 
 // return state.filter(trip => trip.id === action.tripId ? false : true)
