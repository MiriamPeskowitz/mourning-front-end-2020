export const signUpNewUser = (user) => {
	console.log('got to signUp in actions-auth')
	console.log("user:", user)
	return (dispatch) => {
	return fetch(`/users`, {
		method: 'POST',
		body: JSON.stringify({user}),
		headers: {
		 'Content-Type': 'application/json',
		},
	})
	.then(response => response.json())
	.then((user) => {
		dispatch({
			type: 'NEW_USER_CREATED_AUTH_TOBE_ADDED_HERE',
			
		})
	})
}

// NEW_USER_CREATED_AUTH_TOBE_ADDED_HERE etc: will eventually be: 
// .then(({ user, token }) => {
//         dispatch({ type: 'AUTH_COMPLETE', user })
//         localStorage.setItem('token', token)
//       })
//       but I want to understand the process first 



	// 	.then(res => res.json())
	// 	.then(users => {			
	// 		dispatch({
	// 		  type: "MOURNERS_LOADED", 
	// 		  payload: users.data
	// 		})
	// 	})
	// }
}

export default signUpNewUser;

// Need 