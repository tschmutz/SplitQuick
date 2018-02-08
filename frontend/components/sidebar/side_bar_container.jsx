import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SideBar from './side_bar';
import { fetchUsers } from '../../actions/user_actions';
import { fetchFriends, createFriendship } from '../../actions/friend_actions';
import { fetchAllBills } from '../../actions/bills_actions'

const mapStateToProps = state => ({
  errors: state.errors.session
})


const mapDispatchToProps = dispatch => ({
  requestUsers: () => dispatch(fetchUsers()),
  requestFriends: () => dispatch(fetchFriends()),
  createFriendship: (data) => dispatch(createFriendship(data)),
  requestBills: () => dispatch(fetchAllBills())
})



export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
