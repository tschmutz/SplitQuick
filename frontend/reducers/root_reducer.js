import { combineReducers } from 'redux'

import errorReducer from './errors_reducer';
import sessionReducer from './session';
import usersReducer from './users';
import friendsReducer from './friends';

export default combineReducers({
  friends: friendsReducer,
  users: usersReducer,
  session: sessionReducer,
  errors: errorReducer
})
