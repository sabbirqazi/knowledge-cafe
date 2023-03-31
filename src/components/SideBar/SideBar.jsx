import React, { useEffect, useState } from "react";
import BookMark from "../BookMark/BookMark";
import './SideBar.css'

const SideBar = ({readTime,bookMarks}) => {
    
    let totalTime = 0;
     for (const time of readTime){
         totalTime = totalTime + time.read_time;
    }  
  return (
    <>
      <div className="mx-20 my-8 ">
      <div className="time-container text-center align-middle font-bold text-xl">
        <p className="text-indigo-700 mt-6">Spend time on read: {totalTime} min</p>
        
      </div>
      
       <div className="bookmark mt-5 bg-gray-200 p-5">

       <h2 className="text-xl font-bold ">Bookmarked Blogs : {bookMarks.length}</h2>
       {
          
          bookMarks.map(bookMark => <BookMark

          bookMark= {bookMark}
          key = {bookMark.id}
          ></BookMark>)  
        }
       </div>
       </div>
    </>
  );
};

export default SideBar;
