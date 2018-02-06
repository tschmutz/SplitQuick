import { connect } from 'react-redux';
import FriendShow from './friend_show.jsx';
import { deleteFriendship } from '../actions/friend_actions';



const mapStateToProps = (state, ownProps) => {
  let userId = ownProps.match.params.id;
  return {
    friend: state.users[userId]
  }
}

const mapDispatchToProps = dispatch => ({
  deleteFriend: (friendId) => dispatch(deleteFriendship(friendId))
});



export default connect(mapStateToProps, mapDispatchToProps)(FriendShow);
