import { connect } from 'react-redux';
import { signup, receiveSessionErrors } from '../../actions/session_actions';
import FriendsIndex from './friends_index';


const mapStateToProps = state => ({
  friends: Object.values(state.friends)
})


const mapDispatchToProps = dispatch => ({

})



export default connect(mapStateToProps, mapDispatchToProps)(FriendsIndex)
