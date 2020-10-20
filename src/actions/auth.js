// export const signUp = (newUser) => {
// 	return (dispatch) => {
// 		fetch('/users', {
// 			headers: {
// 				'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//       method: 'POST',
//       body: JSON.stringify(newUser)
// 			})
// 		.then(response => response.json())
// 		.then(account => dispatch({ 
// 				type: "SIGN_UP",
// 				payload: account
// 				}))
// 		}
// 	}


// export const login = (username) => {
// 	return ({
// 		type: "LOGIN",
// 		payload: {
// 			currentUser: {
// 				username: username,
// 				password: 'password'
// 			}
// 		}
// 	})
// }


// export const logout = () => {
// 	return {
// 		type: "LOGOUT"
// 		}
// 	}
