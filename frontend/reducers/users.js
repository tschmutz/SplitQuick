import merge from 'lodash/merge';
import { RECEIVE_USERS }from '../actions/user_actions';


const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state)
  switch (action.type) {
    case RECEIVE_USERS:
      // const users = action.users
      // return merge({}, {users})
      return action.users
    default:
      return state
  }
}


export default usersReducer;
