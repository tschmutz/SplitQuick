import React from 'react';
import { Link } from 'react-router-dom';

export default () => {


  return (
      <div className='welcome'>Split expenses with friends.
        <div className='lower-welcome'>
           <b>Share</b> bills and IOU's. <b> Make sure </b>everyone gets paid back.
        </div>
        <div className='get-started-div'>
        <Link className='get-started-button' to='./signup'>Get started now!</Link>
        </div>
      </div>
    )
};
