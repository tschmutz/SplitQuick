import React from 'react';
import SideBar from '../sidebar/side_bar_container';
import Friends from '../friends/friends_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  };


  render() {
    return (
      <div className='test'>
        <SideBar/>
        <div className='dashboard'>
          <div className='dashboard-header'>
            <h1>Dashboard</h1>
            <button className='settle'>Settle up</button>
            <button className='add-bill'>Add a Bill</button>
          </div>
          <div className='balances-block'>
            <div className='balances'>you are owed</div>
            <div className='balances'>you owe</div>
            <div className='balances'>total balance</div>
          </div>
        </div>
        <div className='sidebar'>
        </div>
      </div>
    )
  }
}

export default Dashboard
