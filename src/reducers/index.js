import  { combineReducers }  from 'redux'
import entriesReducer from './entriesReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'
import loginFormReducer from './loginFormReducer'
import signupFormReducer from './signupFormReducer'

const rootReducer = combineReducers({
	authReducer,
	entriesReducer,
	usersReducer,
	loginFormReducer,
	signupFormReducer
})

export default rootReducer

// export default export --import w/o curly braces 
// named export -- import w/ curly braces 