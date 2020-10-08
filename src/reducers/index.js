import { combineReducers } from 'redux'
import entryReducer from './entriesReducer.js'
import userReducer from './usersReducer.js'

const rootReducer = combineReducers({
	entryReducer,
	userReducer
})

export default rootReducer