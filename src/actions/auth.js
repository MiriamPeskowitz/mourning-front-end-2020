export const login = (username)_ => {
	return (
		type: "LOGIN",
		payload: {
			currentUser: {
				username: username,
				password: 'password'
			}
		}
	)
}


export const logout = () => {
	return {
		type: "LOGOUT"
		}
	}


	//how to link this with backend and with user 