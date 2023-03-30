import React, { useEffect, useState } from "react";

const SideBar = ({readTime}) => {
    

  return (
    <>
      <h1>My Activity</h1>

      <div className="mt-5 text-center">
        <p>Spend time on read: {readTime.length} min</p>
        
      </div>
    </>
  );
};

export default SideBar;
