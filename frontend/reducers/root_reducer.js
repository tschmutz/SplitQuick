import { combineReducers } from 'redux'

import errorReducer from './errors_reducer';
import sessionReducer from './session';
import usersReducer from './users';

export default combineReducers({
  users: usersReducer,
  session: sessionReducer,
  errors: errorReducer
})
