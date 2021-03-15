import { resetSignupForm } from "./signupForm"
import { resetLoginForm } from "./loginForm"

export const setCurrentUser = user => {
	console.log("user in setCurrentUser:,", user)
	return {
		type: "SET_CURRENT_USER",
		payload: user
	}
}

export const clearCurrentUser = () => {
	return {
		type: "CLEAR_CURRENT_USER"
	}
 }

export const currentUserLoading = () => {
	return {
		type: "LOADING_CURRENT_USER",
	}
}

//use dispatch when thunk/async is involved 
export const getCurrentUser = () => {
	return dispatch => {
		dispatch(currentUserLoading())

		return fetch("/get_current_user", {
			credentials: "include",
			method: "GET",
			headers: {
				"Content-Type": "application/JSON"
			},
		})
		.then(response => response.json())
		.then(response => {
			if (response.error) {
				console.log(response.error)
			} else {
				dispatch(setCurrentUser(response.data.attributes))
			}
		})
		.catch(err => console.log(err))
	}
}


export const signup = (user, history) => {	
	console.log("signup", history)
	return (dispatch) => {
		dispatch({
			type: "LOADING_CURRENT_USER"
		})
		const config = {
			method: 'POST',
			credentials: "include",
			headers: {
			 'Content-Type': 'application/json',
			  "Accept": 'application/json'
				},
			body: JSON.stringify({user})
			}
		return fetch( "/users", config)
			.then(response => response.json())
			.then(user => {

				if (user.error) {
					alert(user.error)
				} else {
					// console.log("Signup response -- user: ", user)
					dispatch(setCurrentUser(user.data.attributes))
					dispatch(resetSignupForm())	
					history.push('/profile')
				}
			})
			.catch(err=> console.log(err))
	}
}
//could refactor with getMyEntries after setCurrentuser, if I wanted to totally refactor the reducer structure 

//send credentials, if good, setcurrentuser and go to profile page 
export const login = (credentials, history) => {
	return (dispatch) => {
		return fetch("/login", {
			credentials: "include",
			method: 'POST',
			headers: {
			 'Content-Type': 'application/json',
				},
			body: JSON.stringify(credentials),
			})
		.then(response => response.json())
		.then(user => {
			if (user.error) {
				console.log(user.error)
			} else {
				dispatch(setCurrentUser(user.data.attributes))
				// console.log("login- user(action): ", user.data.attributes)
				history.push('/')
			}
		})
		.then(dispatch(resetLoginForm()))
		.catch(err => console.log(err))
	}
}

//why does this need an event arg? 
export const logOut = (event) => {	
	return dispatch => {	
		dispatch(clearCurrentUser())			 
		return fetch("/logout", {
      credentials: "include",
      method: "DELETE"
    })
    .then(r => r.json())
    .then(response => {
    	if (response.notice) { 
    		console.log(response.notice)
    	}
    })
  }
}





