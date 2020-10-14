export default(state = {currentUser: {}, loggedIn: false}, action) => {
	switch(action.type) {
		case "LOGIN":
			return {...state, loggedIn: true, currentUser: action.payload}
		case "LOGOUT":
			return {...state, loggedIn: false, currentUser: {}}
		default:
			return state	
	}
}