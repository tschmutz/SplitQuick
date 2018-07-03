import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchFriends} from '../../actions/friend_actions';
import { fetchAllBills } from '../../actions/bills_actions';
import { fetchUsers } from '../../actions/user_actions';


const mapStateToProps = state => ({
  friends: [state.friends],
  bills: Object.entries(state.bills).map(([key, value]) => ({key,value})),
  users: state.users,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestFriends: () => dispatch(fetchFriends()),
  requestBills: () => dispatch(fetchAllBills()),
  requestUsers: () => dispatch(fetchUsers()),
});



export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
