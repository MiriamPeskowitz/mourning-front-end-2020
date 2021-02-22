//holds login/logout and actions related to current user 
//adding, updating, deleting pieces of their profile 
import { SET_CURRENT_USER, CLEAR_CURRENT_USER,  ADD_NEW_ENTRY, UPDATE_ENTRY, DELETE_ENTRY } from "../actions/types"
// LOADING_CURRENT_USER,
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
		case SET_CURRENT_USER:
// login/signup => sets current user
			return {
				currentUser: action.payload
			}

//logout => clears current user on front end 
		case CLEAR_CURRENT_USER:		
			return initialState
				
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