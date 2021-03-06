import React from 'react';
import { NavLink } from 'react-router-dom';
import FriendsIndex from '../friends/friends_index_container';
import FriendsSearch from '../friends/friends_search_container';
import fetchUsers from '../../actions/user_actions';

class SideBar extends React.Component {
  constructor(props) {
    super(props)
  };

  // componentDidMount() {
  //   this.props.requestBills()
  //   this.props.requestUsers();
  //   this.props.requestFriends();
  // }


  render() {
    // const users = this.props.requestUsers();
    const befriend = this.props.createFriendship;


    return (
        <div className='sidebar'>
          <div className='sidebar-links'>
            <NavLink activeClassName='active' className='sidebar-link-dash' to='/dashboard'><i className="fas fa-home"></i>&nbsp;Dashboard</NavLink>
            <NavLink activeClassName='active' className='sidebar-link-recent'to='/activity'><i className="fas fa-flag"></i>&nbsp;&nbsp; Recent activity</NavLink>
            <NavLink activeClassName='active' className='sidebar-link-exp'to='/all'><i className="fas fa-list"></i>&nbsp; &nbsp;All expenses</NavLink>
          </div>
          <FriendsIndex/>
          <FriendsSearch befriend={befriend}/>
        </div>
    )
  }
}

export default SideBar
