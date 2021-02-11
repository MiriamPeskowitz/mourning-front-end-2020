export const getUsers = () => {
	return (dispatch) => {
		dispatch({
			type: "LOADING_ALL_USERS_NAMES"
		})
		return fetch("/users")
		.then(res => res.json())
		.then(users => {			
			dispatch({
			  type: "ALL_USERS_LOADED", 
			  payload: users.data
			})
		})
	}
}



//these are action creators; functions that are dispatched to emit a change: they return a function 
//when action is dispatched, it hits a reducer, which is a pure function, the reducer changes the state and returns a modified copy. 
//The store brings everythign together. it represents the state by using rootreducer, thunk, and lets you actually dispatch actions
 