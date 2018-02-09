import { connect } from 'react-redux';
import FriendShow from './friend_show.jsx';
import { deleteFriendship, fetchFriends } from '../../actions/friend_actions';
import { fetchUsers} from '../../actions/user_actions';
import { fetchAllBills } from '../../actions/bills_actions';
import { createBill, deleteBill } from '../../actions/bills_actions';

const mapStateToProps = (state, ownProps) => {
  let userId = ownProps.match.params.id;
  return {
    friend: state.users[userId],
    friends: state.friends,
    bills: Object.values(state.bills),
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = dispatch => ({
  deleteFriend: (friendId) => dispatch(deleteFriendship(friendId)),
  requestFriends: () => dispatch(fetchFriends()),
  requestUsers: () => dispatch(fetchUsers()),
  requestBills: () => dispatch(fetchAllBills()),
  createBill: (bill) => dispatch(createBill(bill)),
  destroyBill: (billId) => dispatch(deleteBill(billId))
});



export default connect(mapStateToProps, mapDispatchToProps)(FriendShow);
