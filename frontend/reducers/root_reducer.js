import { combineReducers } from 'redux'

import errorReducer from './errors_reducer'
import sessionReducer from './session_reducer'

export default combineReducers({
  errorReducer,
  sessionReducer
})
