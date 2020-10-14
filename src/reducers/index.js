import { combineReducers } from 'redux'
import entryReducer from './entryReducer'
import userReducer from './userReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
	entryReducer,
	userReducer,
	authReducer
})

export default rootReducer