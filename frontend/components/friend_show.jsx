import React from 'react';
import SideBar from './side_bar_container';

class  FriendShow extends React.Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
    console.log(this.props);
  };

  handleDelete(id) {
    this.props.deleteFriend(id);
    this.props.history.goBack();
  }


  render() {
    return (
      <div className='test'>
        <SideBar/>
        <div className='dashboard'>
          <div className='dashboard-header'>
            <h1>{this.props.friend.username}</h1>
            <button className='delete-friend' onClick={() => this.handleDelete(this.props.friend.id)}>Delete Friend</button>
            <button className='settle'>Settle up</button>
            <button className='add-bill'>Add a Bill</button>
          </div>
        </div>
        <div className='sidebar'>
        </div>
      </div>
    )
  }
}

export default FriendShow
