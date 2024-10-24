import React from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  return (
    <div className='navbar'>
        {/* <img src={assets.logo} className='logo' alt=''/> */}
        <div className='logo'>
          <h1>ThelaBites</h1>
          <p>Admin Panel</p>
        </div>
        <img src={assets.profile_image} className='profile' alt=''/>

    </div>
  )
}

export default Navbar