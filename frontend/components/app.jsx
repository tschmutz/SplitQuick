import React from 'react';
import { Link, Route } from 'react-router-dom';
import Navbar from './navbar_container';
import SessionForm from './session_form';
import SessionContainer from './session_container';
import { AuthRoute } from '../util/route_util';
import { ProtectedRoute } from '../util/route_util';
import DashboardContainer from './dashboard_container';
import SignUpContainer from './signup_container';
import SideBar from './side_bar';
import BillsContainer from './bills_index_container';
import ActivityContainer from './activity_container';
import FriendsContainer from './friends_container';

const App = () => (
  <div>

    <div id='header'>
      <Navbar/>
      <Link to="/" className="header-link">
        <h1 className='logo'>SPLITQUICK</h1>
      </Link>
    </div>
    <div className='test'>
      <AuthRoute path="/login" component={SessionContainer} />
      <AuthRoute path="/signup" component={SignUpContainer} />
      <ProtectedRoute path="/dashboard" component={DashboardContainer}/>
      <ProtectedRoute path="/all" component={BillsContainer}/>
      <ProtectedRoute path="/activity" component={ActivityContainer}/>
    </div>
  </div>
);

export default App;
