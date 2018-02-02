import React from 'react';
import { Link } from 'react-router-dom';



class SideBar extends React.Component {
  constructor(props) {
    super(props)
  };


  render() {
    return (
      <div className='sidebar'>
        <Link className='sidebar-link-dash' to='/dashboard'><i className="fas fa-home"></i>&nbsp;Dashboard</Link>
        <Link className='sidebar-link-recent'to='/dashboard'><i className="fas fa-flag"></i>&nbsp;&nbsp; Recent activity</Link>
        <Link className='sidebar-link-exp'to='/all'><i className="fas fa-list"></i>&nbsp; &nbsp;All expenses</Link>

      </div>
    )
  }
}

export default SideBar
