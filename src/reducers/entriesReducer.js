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
		default:
			return state
	}
}