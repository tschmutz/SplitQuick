import { RECEIVE_FRIENDS } from '../actions/friend_actions';


const friendsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FRIENDS:
      return action.friends;
    default:
      return state;
  }
}


export default friendsReducer;
