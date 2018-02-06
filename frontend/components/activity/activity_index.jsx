import React from 'react';
import SideBar from '../sidebar/side_bar_container';


class Activity extends React.Component {
  constructor(props) {
    super(props)
  };


  render() {
    return (
      <div className='test'>
        <SideBar/>
        <div className='dashboard'>
          <div className='dashboard-header'>
            <h1>Recent activity</h1>
          </div>
          <div className='recent-activity-items'>
            <ul>

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
