// const names = ["rob", "Mir", "Tamar"] 
export default(state = {user: {}, loading: false}, action) => {
	switch(action.type){
		case "LOADING_MOURNERS_NAMES":
			return {
				...state,
				loading:true
			}
		case "MOURNERS_LOADED":
			return {
				...state,
				users: action.payload,
				loading: false
			}
		default:
			return state
	}
}