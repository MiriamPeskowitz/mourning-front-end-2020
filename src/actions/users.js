export const getUsers = () => {
	return dispatch => {
		dispatch => {
			dispatch({type: "LOADING_MOURNERS_NAMES"})
			return fetch(./users)
			.then(res => res.json())
			.then(users => dispatch({type: "MOURNERS_LOADED", payload: users}))
			//will have to check on users.name etc 
		}
	}
}