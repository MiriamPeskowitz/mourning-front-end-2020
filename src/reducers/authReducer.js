//holds login/logout and actions related to current user 
//adding, updating, deleting pieces of their profile 
import { SET_CURRENT_USER, CLEAR_CURRENT_USER, LOADING_CURRENT_USER, ADD_NEW_ENTRY, UPDATE_ENTRY, DELETE_ENTRY } from "../actions/types"

const initialState = { 
	currentUser: {
		username: '',
		email: '',
		description: '',
		id: '',
		entries: [],
	 }
	}

export default(state = initialState, action) => {
	switch(action.type){
// login/signup => sets current user
//this may be setting current user in diff format from the others/ 
		case SET_CURRENT_USER:
			return {
				currentUser: action.payload
			}
		
		// case LOADING_CURRENT_USER:
		// 	return {
		// 		...state
		// 	}

//logout => clears current user on front end 
		case CLEAR_CURRENT_USER:
			console.log("current user cleared")
		
			return initialState
				// 
				// currentUser: ""
			

		case ADD_NEW_ENTRY:				
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

//FIGURE OUT WHERE THIS COMES FROM -- SAME AS
//UPDATE_EDITED_ENTRY? 
		case UPDATE_ENTRY:
		 const returnVal =  state.currentUser.entries.map(entry => entry.id === action.entry.id ? action.entry : entry)	 	
		 return {
		 	...state, 
		 		currentUser: {
		 			...state.currentUser,
		 			entries: returnVal
		 		}
		 }

		case DELETE_ENTRY:	
			const newEntries = state.currentUser.entries.filter(entry => entry.id === action.id ? false : true)
			return {
		 	...state, 
		 		currentUser: {
		 			...state.currentUser,
		 			entries: newEntries
		 		}
		 }
			default:
				return state
		}
}


//notes on possible ways to delete 
// console.log("entry in reducer", action.id)
			// const newState = [...state.currentUser.entries]
			// const indexToDelete = state.currentUser.entries.findIndex(entry => entry.id === action.id)
			// const newValue = newState.splice(indexToDelete, 1)
			// return newValue

// or: case types.DELETE_CAT_SUCCESS: {
//       const newState = Object.assign([], state);
//       const indexOfCatToDelete = state.findIndex(cat => {
//         return cat.id == action.cat.id
//       })
//       newState.splice(indexOfCatToDelete, 1);
//       browserHistory.push('/cats');
//       return newState;
//delete entry 
 // return state.filter(trip => trip.id === action.tripId ? false : true)
// or return {todos: state.todos.filter(todo => todo.id !== action.payload)}