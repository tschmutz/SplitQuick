
import merge from 'lodash/merge';

import { RECEIVE_FRIENDS, RECEIVE_FRIEND, DELETE_FRIEND } from '../actions/friend_actions';


const friendsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FRIENDS:
      return action.friends
    case RECEIVE_FRIEND:
      let newState = merge({}, state);
      return merge(newState, action.friend)
    case DELETE_FRIEND:
      newState = merge({}, state);
      delete newState[action.friendId];
      return newState;
    default:
      return state;
  }
}


export default friendsReducer;
