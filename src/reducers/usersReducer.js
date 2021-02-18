import { LOADING_ALL_USERS_NAMES, ALL_USERS_LOADED, SET_ALPHABETIZED_LIST  } from "../actions/types"

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
			
		case SET_ALPHABETIZED_LIST: 
			console.log('got to SAList')
			return {
				...state, 
				users: action.payload
			}
		default:
			return state
	}
}