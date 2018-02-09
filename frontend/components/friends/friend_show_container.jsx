import { connect } from 'react-redux';
import FriendShow from './friend_show.jsx';
import { deleteFriendship, fetchFriends } from '../../actions/friend_actions';
import { fetchUsers} from '../../actions/user_actions';


const mapStateToProps = (state, ownProps) => {
  let userId = ownProps.match.params.id;
  return {
    friend: state.users[userId]
  }
}

const mapDispatchToProps = dispatch => ({
  deleteFriend: (friendId) => dispatch(deleteFriendship(friendId)),
  requestFriends: () => dispatch(fetchFriends()),
  requestUsers: () => dispatch(fetchUsers())
});



export default connect(mapStateToProps, mapDispatchToProps)(FriendShow);
