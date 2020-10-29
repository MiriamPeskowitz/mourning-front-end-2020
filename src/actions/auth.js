// import { SIGNUP_SUCCESS, SIGNUP_FAIL } from "./authTypes"

export const signUp = (newUser) => {
	// newUser.email, newUser.name, newUser.password
//find syntax for SIGN_UP, sign_up success, signUP-fail 
//Here -- next, look at servicesauth, see what to do here. make a page like howards 
//also, look up JWT with rails backend . 
	return (dispatch) => {
		fetch('/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({newUser})
			}
		)
		.then(response => response.json())
		.then(user => {
			console.log("user: ", user)
			dispatch({ 
				type: "SIGNUP_SUCCESS", 
				payload: user
				})
		})
		.catch(err => {
			dispatch({
				type: "SIGNUP_FAIL"
			})
		})
	}
}