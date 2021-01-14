// import { resetLoginForm, resetSignin} from other actioncreator files
//Needed here, but they fit into other reducer patterns, in terms of the data they control in the store 

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
	console.log("got to ccu")
	return {
		type: 'CLEAR_CURRENT_USER'
	}
 }

//use dispatch when thunk/async is involved 
export const getCurrentUser = () => {
	return dispatch => {
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
				//dispatch get anyother kind of data needed) 
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
					console.log("action user: ", user)
					dispatch(resetLoginForm())
					history.push('/profile')
				}
			})
			.catch(err => console.log(err))
		}
}



// i think the payload needs to be more specific 

// export const logOut = () => {
// // console.log("got to actioncreator logOut")
// debugger
// 	return (dispatch) => {
// 		// console.log("logged out2")
// 		// dispatch(clearCurrentUser())

// 		return fetch("/logout", {
// 			credentials: "include",
// 			method: 'DELETE'
// 		})
// 	}
//  }


export const test = () => {
	console.log("Does this work now???")
	return (dispatch) => {
					console.log("here2")
				return fetch("/logout", {
		      credentials: "include",
		      method: "DELETE"
		    })
		    .then(console.log("here2"))
	}
}

	export const logOut = (history) => {	
			return (dispatch) => {
					
				return fetch("/logout", {
		      credentials: "include",
		      method: "DELETE"
		    })
		    .then(console.log("here2"))
		    .then(resp => resp.json())
		    .then(() => {
		    	dispatch({type: 'CLEAR_CURRENT_USER'})	
		    }) 
		    .then(history.push('/login'))
		  }

   } 


//get to this code -- 
// export const logout = event => {
//   return dispatch => {
//     dispatch(clearCurrentUser())
//     dispatch(clearTrips())
//     return fetch('http://localhost:3001/api/v1/logout', {
//       credentials: "include",
//       method: "DELETE"
//     })
//   }
// }

//add dispatch(clearCurrentUser)  and dispatch(clearWhateverElse )
 //logout is standard -- reducer does the work 

// export const setCurrentUser = ({user}) => {
// 	return {
// 		type: "SET_CURRENT_USER",
// 		user
// 	}
// }



// export const getCurrentUser = userCredentials => {
// 	return dispatch => {
// 		return fetch("/autologin", {
// 			headers: {
//         "Content-Type": "application/json"
//       }
// 		})
// 		.then(response => response.json())
// 		.then(user => {
// 			if (user.error) {
// 				alert(user.error)
// 			} else {
// 				dispatch(setCurrentUser(user))
// 			}
// 		})
// 		.catch(console.log('error at getting Current user '))
// 	}
// }
// going to add this: 
// .then(res => res.json())
//       .then(({ user, token }) => {
//         dispatch({ type: 'AUTH_COMPLETE', user })
//         localStorage.setItem('token', token)
//       })


	// 	.then(res => res.json())
	// 	.then(users => {			
	// 		dispatch({
	// 		  type: "MOURNERS_LOADED", 
	// 		  payload: users.data
	// 		})
	// 	})
	// }