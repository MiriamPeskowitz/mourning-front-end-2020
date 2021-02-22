//this reducer is for loading entries to home page
//add/update/delete functions are in authReducer

import { LOADING_ENTRIES, ENTRIES_LOADED, CLEAR_ENTRIES } from "../actions/types"

export default(state = {entries: [], loading: false}, action) => {
	switch(action.type){
		case LOADING_ENTRIES:
			return {
				...state,
				// loading: true
			}	
		
		case ENTRIES_LOADED:
			return {
				...state,
				entries: action.payload,
				loading: false
			}
	
		case CLEAR_ENTRIES:
				return state

		default:
			return state
	}
}
