import { combineReducers } from 'redux'
import entryReducer from './entryReducer.js'
import userReducer from './userReducer.js'

const rootReducer = combineReducers({
	entryReducer,
	userReducer
})

export default rootReducer