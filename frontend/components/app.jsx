import React from 'react';
import { Link, Route } from 'react-router-dom';
import Navbar from './navbar';
import SessionForm from './session_form';
import SessionContainer from './session_container';
import AuthRoute from '../util/route_util'


const App = () => (
  <div>
    <Navbar/>

    <div id='header'>
      <Link to="/" className="header-link">
        <h1 className='logo'>SplitQuick</h1>
      </Link>
    </div>
      <Route path="/login" component={SessionContainer} />
      <Route path="/signup" component={SessionContainer} />
  </div>
);

export default App;
