import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <>
          <div className="navbar bg-gray-700">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="flex-none gap-2">
    
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      
    </div>
  </div>
</div>  
        </>
    );
};

export default Header;