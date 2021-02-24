import  { combineReducers }  from 'redux'
import entriesReducer from './entriesReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'
import loginFormReducer from './loginFormReducer'
import signupFormReducer from './signupFormReducer'
import entryFormReducer from './entryFormReducer'
import updateFormReducer from './updateFormReducer'
import memoryFormReducer from './memoryFormReducer'
import descriptionFormReducer from './descriptionFormReducer'

const rootReducer = combineReducers({
	authReducer,
	entriesReducer,
	usersReducer,
	loginFormReducer,
	signupFormReducer,
	entryFormReducer,
	updateFormReducer,
	memoryFormReducer,
	descriptionFormReducer
})

export default rootReducer

// export default export --import w/o curly braces 
// named export -- import w/ curly braces 