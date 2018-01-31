import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';

const App = () => (
  <div>
    <Navbar/>
    <Link to="/" className="header-link">
    <h1>SplitQuick</h1>
    </Link>
  </div>
);

export default App;
