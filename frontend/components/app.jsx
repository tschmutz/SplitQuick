    import React from 'react';
import { Link, Route } from 'react-router-dom';
import Navbar from './navbar_container';
import SessionForm from './session_form';
import SessionContainer from './session_container';
import { AuthRoute } from '../util/route_util';
import { ProtectedRoute } from '../util/route_util';
import DashboardContainer from './dashboard_container';
import SignUpContainer from './signup_container';


const App = () => (
  <div>

    <div id='header'>
      <Navbar/>
      <Link to="/" className="header-link">
        <h1 className='logo'>SPLITQUICK</h1>
      </Link>
    </div>
      <AuthRoute path="/login" component={SessionContainer} />
      <AuthRoute path="/signup" component={SignUpContainer} />
      <ProtectedRoute path="/dashboard" component={DashboardContainer}/>
  </div>
);

export default App;
