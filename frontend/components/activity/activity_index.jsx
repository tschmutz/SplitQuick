import React from 'react';
import SideBar from '../sidebar/side_bar_container';
import RecentItem from './activity_index_item';


class Activity extends React.Component {
  constructor(props) {
    super(props)
  };


  render() {
    console.log(this.props);
    return (
      <div className='test'>
        <SideBar/>
        <div className='dashboard'>
          <div className='dashboard-header'>
            <h1>Recent activity</h1>
          </div>
          <div className='recent-activity-items'>
            <ul className='ul-recent'>
              {this.props.bills.map( bill => (
                <li key={bill.id} className='bills-list-item' style={{height: '65px'}}>
                  <RecentItem
                    bill={bill}
                    currentUser={this.props.currentUser}
                    friends={this.props.friends}/>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className='sidebar'>

        </div>
      </div>
    )
  }
}

export default Activity
