import { combineReducers } from 'redux'

import errorReducer from './errors_reducer';
import sessionReducer from './session';
import usersReducer from './users';
import friendsReducer from './friends';
import billsReducer from './bills_reducer';

export default combineReducers({
  friends: friendsReducer,
  users: usersReducer,
  bills: billsReducer,
  session: sessionReducer,
  errors: errorReducer,
})
