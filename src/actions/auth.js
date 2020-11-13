// import { SIGNUP_SUCCESS, SIGNUP_FAIL } from "./authTypes"

export const signUp = (newUser) => {
	console.log("newUser from auth.js: ", newUser)

	return (dispatch) => {
		fetch(`http://localhost:3001/api/v1/users`, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
			}
		)
		.then(response => response.json())
		.then(user => {
			console.log("got to response")
			console.log("Response from api -- user: ", user)
			dispatch({ 
				type: "SIGNUP_SUCCESS",

				})
		})
		.catch(err => {
			dispatch({
				type: "SIGNUP_FAIL"
			})
		})
	}
}

	// newUser.email, newUser.name, newUser.password
//find syntax for SIGN_UP, sign_up success, signUP-fail 
//Here -- next, look at servicesauth, see what to do here. make a page like howards 
//also, look up JWT with rails backend . 

//feature: add success and fail messages 