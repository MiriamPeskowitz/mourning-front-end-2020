import { combineReducers } from 'redux'
import entriesReducer from './entriesReducer.js'
import usersReducer from './usersReducer.js'

const rootReducer = combineReducers({
	entriesReducer,
	usersReducer
})

export default rootReducer