export const signUpNewUser = (newUser) => {
	console.log('got to signUp in actions-auth')
	return (dispatch) => {
	return fetch(`/users`, {
		method: 'POST',
		body: JSON.stringify({newUser}),
		headers: {
		 'Content-Type': 'application/json',
		},
	})
	.then(response => response.json())
	.then((user) => {
		dispatch({
			type: 'NEW_USER_CREATED_AUTH_TOBE_ADDED_HERE',
			payload: user.data
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