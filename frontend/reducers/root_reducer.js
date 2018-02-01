import { combineReducers } from 'redux'

import errorReducer from './errors_reducer';
import sessionReducer from './session';

export default combineReducers({
  session: sessionReducer,
  errors: errorReducer
})
