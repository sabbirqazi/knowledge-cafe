import React, { useEffect, useState } from "react";
import BookMark from "../BookMark/BookMark";

const SideBar = ({readTime,bookMarks}) => {
    console.log(readTime)
    let totalTime =0;
     for (const time of readTime){
         totalTime = totalTime + time.read_time;
    }  
   
  return (
    <>
      <h1>My Activity</h1>

      <div className="mt-5 text-center">
        <p>Spend time on read: {totalTime} min</p>
        
      </div>
      
       
        {
          bookMarks.map(bookMark => <BookMark

          bookMark= {bookMark}
          key = {bookMark.id}
          ></BookMark>)  
        }
        <p></p>
      
    </>
  );
};

export default SideBar;
