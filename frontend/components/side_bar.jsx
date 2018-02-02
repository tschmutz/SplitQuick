import React from 'react';
import { Link } from 'react-router-dom';



class SideBar extends React.Component {
  constructor(props) {
    super(props)
  };


  render() {
    return (
      <div className='sidebar'>
        <Link className='sidebar-link-dash' to='/dashboard'>Dashboard</Link>
        <Link className='sidebar-link-recent'to='/dashboard'><i className="fas fa-flag"></i>Recent activity</Link>
        <Link className='sidebar-link-exp'to='/all'>All expenses</Link>

      </div>
    )
  }
}

export default SideBar
