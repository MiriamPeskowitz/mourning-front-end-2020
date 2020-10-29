export default(state = {currentUser: {}, loggedIn: false}, action) => {
	const  {type, payload} = action

	switch(type) {
		case "SIGNUP_SUCCESS":
			return {...state, isLoggedIn: false}


		case "LOGIN":
			return {...state, loggedIn: true, currentUser: payload}
		case "LOGOUT":
			return {...state, loggedIn: false, currentUser: {}}
		default:
			return state	
	}
}