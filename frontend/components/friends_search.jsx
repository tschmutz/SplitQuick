import React from 'react';


class FriendsSearch extends React.Component {
  constructor(props) {
    super(props)
  };

  // componentDidMount() {
  //   this.props.requestUsers();
  // }



  render() {
    return (
      <ul className='friends-search-list'>
        {this.props.users.map(user => <li key={Date()}>{user.username}</li>)}
      </ul>
    )
  }
}

export default FriendsSearch;
