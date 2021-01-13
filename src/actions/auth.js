// import { resetLoginForm } from "./loginForm.js"
import { resetSignupForm } from "./signupForm.js"

export const setCurrentUser = user => {
	return {
		type: "SET_CURRENT_USER",
		payload: user
	}
}

//add clear current user 

//move to loginform action creator 
export const resetLoginForm = () => {
	return {
		type: "RESET_LOGIN_FORM"
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
				dispatch(setCurrentUser(response.data))
				console.log("response.data/getCurrentUser: ", response.data)
				//dispatch get anyother kind of data needed) 
			}
		})
		.catch(err => console.log(err))
	}
}


export const signup = (credentials, history) => {
	
	return (dispatch) => {
			//put data into key-value format		

		const newUserInfo = {
			user: credentials
		}

		const config = {
			method: 'POST',
			credentials: "include",
			headers: {
			 'Content-Type': 'application/json',
			  "Accept": 'application/json'
				},
			body: JSON.stringify({newUserInfo})
			}

		return fetch( "/users", config)
			.then(response => response.json())
			.then((user) => console.log("payload:user: ", user))
			.then((user) => {
				if (user.error) {
					alert(user.error)
				} else {
					dispatch(setCurrentUser(user.data))
					dispatch(resetSignupForm)
					history.push('/profile')
				}
			})
			.catch(error=> console.log("from actions/auth.js: signup didn't work"))
	}
}


export const login = (credentials) => {
	debugger
	return (dispatch) => {
		return fetch("/login", {
			method: 'POST',
			headers: {
			 'Content-Type': 'application/json',
			},
			body: JSON.stringify(credentials),
		})
			.then(response => response.json())
			.then(user => {
				// if (user.error) {
				// 	alert(user.error)
				// } else {
			
					dispatch({
					type: 'LOGIN_COMPLETE', 
					payload:user.data	
				})
				console.log("action user: ", user)
			})
			.catch(err => console.log(err))
		}
}

// i think the payload needs to be more specific 

export const logout = () => {
	return {
		type: 'LOGOUT'
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