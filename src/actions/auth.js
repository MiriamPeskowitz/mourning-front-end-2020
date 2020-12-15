export const signUpNewUser = (user) => {
	console.log('got to signUp in actions-auth')
	console.log("user:", user)

	const token = localStorage.getItem('token')
	const config = {
			method: 'POST',
			body: JSON.stringify({user}),
			headers: {
			 'Content-Type': 'application/json',
			  'Authorization': token
				},
			}

	return (dispatch) => {
		dispatch({type: "ADDING_NEW_USER"});

		return fetch( "/users", config)
			.then(response => response.json())
			.then((user) => {
				dispatch({
					type: "NEW_USER_CREATED",
					payload: user
					 // localStorage.setItem('token', token)
				})
			})
			.catch(error=> console.log("signup didn't work"))

	}
}

//or use a regular .catch(err => c)
// NEW_USER_CREATED_AUTH_TOBE_ADDED_HERE etc: will eventually be: 
// .then(({ user, token }) => {
//         dispatch({ type: 'AUTH_COMPLETE', user })
//         localStorage.setItem('token', token)
//       })
//       but I want to understand the process first 
export const login = (user) => {
	return (dispatch) => {
		console.log('got to login in actions-auth')
		console.log("user:", user)
		return fetch("/login", {
			method: 'POST',
			body: JSON.stringify({user}),
			headers: {
			 'Content-Type': 'application/json',
			},
		})
			.then(response => response.json())
			.then(user => {
				console.log("got to LAC in auth.js")
				dispatch({
					type: 'LOGIN_AUTHORIZATION_COMPLETE', 
					payload: user.data	
				})
		})
	}
}


export const logout = () => {
	return {
		type: 'LOGOUT'
	}
}
// user/x/data 

export const setCurrentUser = ({user}) => {
	return {
		type: "SET_CURRENT_USER",
		user
	}
}


export const getCurrentUser = userCredentials => {
	return dispatch => {
		return fetch("/autologin", {
			headers: {
        "Content-Type": "application/json"
      }
		})
		.then(response => response.json())
		.then(user => {
			if (user.error) {
				alert(user.error)
			} else {
				dispatch(setCurrentUser(user))
			}
		})
		.catch(console.log('error at getting Current user '))
	}
}
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