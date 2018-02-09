import React from 'react';
import { Link } from 'react-router-dom';
import FriendsIndex from '../friends/friends_index_container';
import FriendsSearch from '../friends/friends_search_container';
import fetchUsers from '../../actions/user_actions';

class SideBar extends React.Component {
  constructor(props) {
    super(props)
  };

  componentDidMount() {
    this.props.requestBills()
    this.props.requestUsers();
    this.props.requestFriends();
  }


  render() {
    // const users = this.props.requestUsers();
    // const friends = this.props.requestFriends();
    const befriend = this.props.createFriendship;


    return (
        <div className='sidebar'>
          <div className='sidebar-links'>
            <Link className='sidebar-link-dash' to='/dashboard'><i className="fas fa-home"></i>&nbsp;Dashboard</Link>
            <Link className='sidebar-link-recent'to='/activity'><i className="fas fa-flag"></i>&nbsp;&nbsp; Recent activity</Link>
            <Link className='sidebar-link-exp'to='/all'><i className="fas fa-list"></i>&nbsp; &nbsp;All expenses</Link>
          </div>
          <FriendsIndex/>
          <FriendsSearch befriend={befriend}/>
        </div>
    )
  }
}

export default SideBar
