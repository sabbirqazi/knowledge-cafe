import React from 'react';
import './Header.css'
import Profile from '../../images/profile.jpg'
const Header = () => {
    return (
        <>
          <div className="navbar bg-gray-200">
  <div className="flex-1 ml-10">
    <a className="btn btn-ghost normal-case text-2xl">MediumX</a>
  </div>
  <div className="flex-none gap-2">
    
    <div className='mr-10'>
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={Profile} />
        </div>
      </label>
      
    </div>
  </div>
</div>  
        </>
    );
};

export default Header;