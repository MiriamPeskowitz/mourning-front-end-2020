// import { resetLoginForm, resetSignin} from other actioncreator files
// Needed here, but they fit into other reducer patterns, in terms of the data they control in the store 
import { resetSignupForm } from "./signupForm"
import { resetLoginForm } from "./loginForm"
import { clearEntries } from "./entries"

export const setCurrentUser = user => {
	console.log("user in setCurrentUser:,", user)
	return {
		type: "SET_CURRENT_USER",
		payload: user
	}
}

export const clearCurrentUser = () => {
	console.log("got to ccu")
	return {
		type: 'CLEAR_CURRENT_USER'
	}
 }

export const currentUserLoading = () => {
	console.log('got to currentUserLoading')
	return {
		type: "LOADING_CURRENT_USER",
	}
}

//use dispatch when thunk/async is involved 
export const getCurrentUser = () => {
	console.log('first')
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
				alert(response.error)
			} else {
				dispatch(setCurrentUser(response.data.attributes))
				console.log("currentUser is (response.data.attributes.username): ", response.data.attributes.username)
			
				// alert(`Welcome, response.data.attributes.username`)
				//dispatch get another kind of data needed) 
			}
		})
		.catch(err => console.log(err))
	}
}


export const signup = (user, history) => {	
	return (dispatch) => {
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
			.then((user) => console.log("payload:user: ", user))
			.then((user) => {
				if (user.error) {
					alert(user.error)
				} else {
					dispatch(setCurrentUser(user.data))
					dispatch(resetSignupForm())
					history.push('/profile')
				}
			})
			.catch(error=> console.log("from actions/auth.js: signup didn't work"))
	}
}

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
		.then(console.log("got here"))
		.then(user => {
			if (user.error) {
				alert(user.error)
			} else {
				dispatch(setCurrentUser(user))
				console.log("user(action): ", user)
				history.push('/profile')
			}
		})
		.then(dispatch(resetLoginForm()))
		.catch(err => console.log(err))
	}
}

export const logOut = (event) => {	
	console.log("got to logOut action creator")
	return (dispatch) => {	
		dispatch(clearCurrentUser)	
		dispatch(clearEntries)
		return fetch("/logout", {
      credentials: "include",
      method: "DELETE"
    })
  }
}





