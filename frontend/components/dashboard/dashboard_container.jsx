import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchFriends} from '../../actions/friend_actions';


const mapStateToProps = state => ({
  friends: [state.friends],
  bills: state.bills
});

const mapDispatchToProps = dispatch => ({
  requestFriends: () => dispatch(fetchFriends()),
});



export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
