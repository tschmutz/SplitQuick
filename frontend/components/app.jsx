import React from 'react';
import { Link, Route } from 'react-router-dom';
import Navbar from './navbar';
import SessionForm from './session_form';
import SessionContainer from './session_container';
import AuthRoute from '../util/route_util'
import DashboardContainer from './dashboard_container';


const App = () => (
  <div>

    <div id='header'>
      <Navbar/>
      <Link to="/" className="header-link">
        <h1 className='logo'>SPLITQUICK</h1>
      </Link>
    </div>
      <Route path="/login" component={SessionContainer} />
      <Route path="/signup" component={SessionContainer} />
      <Route path="/dashboard" component={DashboardContainer}/>
  </div>
);

export default App;
