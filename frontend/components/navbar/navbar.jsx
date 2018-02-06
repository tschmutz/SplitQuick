import React from 'react';
import { Link } from 'react-router-dom';

export default ({currentUser, logout}) => {
  console.log(this);
   const display = currentUser ? (
     <div className='logged-in'>
       <button className='log-out-button' onClick={() => logout()}>Log out</button>
       <h2 className='greeting'>Hello, {currentUser.username}</h2>
     </div>
   ) : (
     <nav className="login-signup">
       <Link to='/login' className='log-in'>Log in</Link> or
       <Link to='/signup' className='sign-up'>Sign up</Link>

     </nav>
   )

  return (
    <div className="banner">
      {display}
    </div>
    )
};


// class Navbar extends React.Component {
//    const display = props.currentUser ? (
//      <div>
//        <h2>Hello, {currentUser.username}</h2>
//        <button onClick={props.logout}>Log out</button>
//      </div>
//    ) : (
//      <nav className="login-signup">
//        <Link to='/login'>Log in</Link> or
//        <button >Sign up</button>
//      </nav>
//    )
//
// handleSubmit() {
//
// }
//
//   render() {
//   return (
//     <div>
//       display
//     </div>
//     )
//   }
// };
