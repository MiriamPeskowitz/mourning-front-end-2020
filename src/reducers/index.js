import  { combineReducers }  from 'redux'
import entryReducer from './entryReducer.js'
import userReducer from './userReducer.js'
import authReducer from './authReducer.js'

const rootReducer = combineReducers({
	authReducer,
	entryReducer,
	userReducer
})

export default rootReducer

// export default export --import w/o curly braces 
// named export 