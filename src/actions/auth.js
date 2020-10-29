import { SIGNUP_SUCCESS } from "./authTypes"

export const signUp = (newUser) => {
	// newUser.email, newUser.name, newUser.password
//find syntax for SIGN_UP, sign_up success, signUP-fail 
//Here -- next, look at servicesauth, see what to do here. make a page like howards 
//also, look up JWT with rails backend . 
	return (dispatch) => {
		fetch('/users', {
			headers: {
				'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(newUser)
			})
		.then(response => response.json())
		.then(account => dispatch({ 
				type: SIGNUP_SUCCESS, //change to signup_success 
				payload: account
				}))
		}
	}


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
