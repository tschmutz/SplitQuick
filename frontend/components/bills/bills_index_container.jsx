import { connect } from 'react-redux';
import BillsIndex from './bills_index.jsx';
import { fetchAllBills, createBill } from '../../actions/bills_actions';
import { fetchUsers} from '../../actions/user_actions';
import { fetchFriends } from '../../actions/friend_actions';

const mapStateToProps = state => ({
  bills: Object.values(state.bills),
  friends: state.friends,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createBill: bill => dispatch(createBill(bill)),
  requestBills: () => dispatch(fetchAllBills()),
  requestUsers: () => dispatch(fetchUsers()),
  requestFriends: () => dispatch(fetchFriends())
});



export default connect(mapStateToProps, mapDispatchToProps)(BillsIndex);
