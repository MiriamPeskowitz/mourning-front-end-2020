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
			console.log("REDucer-- entry", action.entry);
		 return state.currentUser.entries.map(entry => entry.id === action.entry.id ? action.entry : entry)
		 	// console.log("reducer --:", state.currentUser.entries.map(entry => entry.id === action.entryId ? action.entry : entry))
		  
		 		// ? action.entry : entry))
		 	// console.log("REducer, updatedEntry", updatedEntry)
		 	// return updatedEntry

// const initialState = []
//       return [].map(trip => trip.id === action.trip.id ? action.trip : trip)

// const initialState = { 
// 	currentUser: {
// 		username: '',
// 		email: '',
// 		description: '',
// 		id: '',
// 		entries: [],
// 		// loading: false
// 	 }
// 	}
		 // console.log("update entry reducer: ",entries)
		 // return entries
		// case "UPDATE_ENTRY":
		// 	console.log('got to REDUCER update_entry', state.currentUser.entries.find(entry => entry.id = action.entryId) )
		// 	// const newEntries = state.currentUser.entries.map(entry => entry.id === action.entryId ? action.entry : entry) wrong
		// 	// const newEntries =state.currentUser.entries.map(entry => entry.id !=== action.entryId ? action.entry : entry)
		// 	console.log("reducer-- ChangedEntry: ", )
		// 	return 
				
		// 		currentUser: {
		// 			...state.currentuser,
		// 			entries: state.entries.map(entry => {
		// 				if (entry.id !== action.entry.id) {
		// 					return entry
		// 				}
		// 				return ...entry, {
		// 					title: action.entry.title,
		// 					content: action.entry.content
		// 					id: action.entry.id
		// 				}
		// 			})
				
		// 	}

// currentUser: {
// 		entries: [],

		

			
			// case "DELETE_ENTRY":
			// 	return state.filter(entry => entry.id === action.entryId ? false: true)
				
		
			default:
				return state
		}
}
