import  { combineReducers }  from 'redux'
import entriesReducer from './entriesReducer'
import usersReducer from './usersReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
	authReducer,
	entriesReducer,
	usersReducer,
	loginForm
})

export default rootReducer

// export default export --import w/o curly braces 
// named export -- import w/ curly braces 