import { LOADING_ALL_USERS_NAMES, ALL_USERS_LOADED  } from "../actions/types"

export default(state = {users: [], loading: false}, action) => {

	switch(action.type){
		case LOADING_ALL_USERS_NAMES:
			return {
				...state,
				loading: true
			}
		
		case ALL_USERS_LOADED :
			return {
				...state,
				users: action.payload,
				loading: false
			}
			
		default:
			return state
	}
}