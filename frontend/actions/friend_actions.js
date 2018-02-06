import * as APIUtil from '../util/friends_api_util';

export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS';
export const RECEIVE_FRIEND = 'RECEIVE_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';

const receiveFriends = friends => ({
  type: RECEIVE_FRIENDS,
  friends
})

const receiveFriend = friend => ({
  type: RECEIVE_FRIEND,
  friend
})

const deleteFriend = friendId => ({
  type: DELETE_FRIEND,
  friendId
})



export const fetchFriends = () => (dispatch) => (
  APIUtil.fetchFriends().then( friends => dispatch(receiveFriends(friends)))
)

export const createFriendship = data => dispatch => (
  APIUtil.createFriendship(data).then( friend => dispatch(receiveFriend(friend)))
)

export const deleteFriendship = friendId => dispatch => (
  APIUtil.deleteFriendship(friendId).then(friend => dispatch(deleteFriend(friendId)))
)
