const getUsers = () => {
	return (dispatch) => {
		dispatch({
			type: "LOADING_MOURNERS_NAMES"
		})
		return fetch("/users")
		.then(res => res.json())
		.then(users => {			
			dispatch({
			  type: "MOURNERS_LOADED", 
			  payload: users.data
			})
		})
	}
}

export default getUsers

//these are action creators; functions that are dispatched to emit a change: they return a function 
//when action is dispatched, it hits a reducer, which is a pure function, the reducer changes the state and returns a modified copy. 
//The store brings everythign together. it represents the state by using rootreducer, thunk, and lets you actually dispatch actions
 