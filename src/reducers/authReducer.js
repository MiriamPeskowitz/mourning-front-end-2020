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
		// console.log("entry.id in reducer:", action.payload.id)	
		// console.log("entry in reducer:", action.payload)	
		// console.log("entry.content in reducer:", action.payload.content)	
			
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
			case "UPDATE_TRIP":
				return state.map(entry => entry.id === action.entryIdd ? action.entry : entry)
			
			case "DELETE_ENTRY":
				return state.filter(entry => entry.id === action.entryId ? false: true)
				// 			{
				// currentUser: action.payload,
				// loading: false
			// }
							// currentuser.entries: [action.payload]

									// [...state.currentUser.entries, action.payload]
					

// return {
// 				...state,
// 				entries: action.payload,
// 				loading: false
// 			}
				// state is not iterable: entries: [...state, action.payload ]

			// return {
			// 	currentUser: 
			// 		{ entries: [...state, currentUser.entries.action.payload]
			// 		} 
			// 	}
			
			

			

			// return { this returned just one entry 
			// 	...state, entries: {...state.entries, ...action.payload }
			// }

			 // {
			// 	...state.concat({
			// 		entries: [...state.currentUser.entries, action.payload]
			// 	})
			
			// }
				
					// .concat({
					// 	id: newEntry.id,
					// 	title:newEntry..title,
					// 	content:newEntry..content
					// 	// user_id: action.con
					// })
				
			
				// entries: [...state.currentUser.entries, action.payload]
			
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
// const initialState = []

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case "SET_MY_TRIPS":
//       return action.trips
//     case "ADD_TRIP":
//       return state.concat(action.trip)
//     case "UPDATE_TRIP":
//       return state.map(trip => trip.id === action.trip.id ? action.trip : trip)
//     case "DELETE_TRIP":
//       //console.log( "action.tripId is ", action.tripId)
//       return state.filter(trip => trip.id === action.tripId ? false : true)
//     case "CLEAR_TRIPS":
//       return initialState
//     default:
//       return state
