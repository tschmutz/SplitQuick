import React from 'react';

class Navbar extends React.Component {

  handleClick() {

  }

  render() {
  return (
    <nav className="login-signup">
      <button onClick={this.handleClick}>Log in</button> or
      <button onClick={this.handleClick}>Sign up</button>
    </nav>
    )
  }
};

export default Navbar;
