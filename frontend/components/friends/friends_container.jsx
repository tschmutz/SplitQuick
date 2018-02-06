import { connect } from 'react-redux';
import FriendsIndex from './friends_index.jsx';
import { fetchFriends } from '../../util/friends_api_util';



const mapStateToProps = state => ({
  friends: [state.friends]
});

const mapDispatchToProps = dispatch => ({

});



export default connect(mapStateToProps, mapDispatchToProps)(FriendsIndex);
