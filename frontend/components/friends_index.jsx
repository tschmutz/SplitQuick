import React from 'react';



class FriendsIndex extends React.Component {
  constructor(props) {
    super(props)
  };



  render() {
    return (
      <div className='friends-index'>
        <div className='friend-header'>FRIENDS</div>
        <ul className='friends-list'>
          {this.props.friends.map((friend, i) => (<li key={i}>
            <i className="fas fa-user"></i>&nbsp; &nbsp;
            {friend.username}</li>))}
        </ul>
        <div className='friend-search-label'>Add Friends</div>
      </div>
    )
  }
}

export default FriendsIndex;
