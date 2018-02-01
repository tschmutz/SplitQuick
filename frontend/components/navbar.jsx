import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

handleSubmit() {

}

  render() {
  return (
    <nav className="login-signup">
      <Link to='/login'>Log in</Link> or
      <button >Sign up</button>
    </nav>
    )
  }
};

export default Navbar;
