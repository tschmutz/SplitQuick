import React from 'react';
import { Link } from 'react-router-dom';


class FriendsIndex extends React.Component {
  constructor(props) {
    super(props)
    this.selectName = this.selectName.bind(this)

  };


  selectName(id) {
    console.log(this.props);
  }

  render() {
    return (
      <div className='friends-index'>
        <div className='friend-header'>FRIENDS</div>
        <ul className='friends-list'>

          {this.props.friends.map((friend, i) => (
            <Link to={`/friend/${friend.id}`} key={i} className='friend-index-item' >
              <li key={friend.id}>
              <i className="fas fa-user"></i>&nbsp; &nbsp;
              {friend.username}</li>
            </Link>
          ))}
        </ul>
        <div className='friend-search-label'>Add Friends</div>
      </div>
    )
  }
}

export default FriendsIndex;
