import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import SideBar from '../SideBar/SideBar'
import './Home.css'
const Home = () => {
    const [blogs, setBlogs] = useState([])
    const [readTime, setReadTime] = useState([])
    const [bookMarks, setBookMarks] = useState([])
    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
  
    const handleReadTime= (blog)=>{
        const newReadTime = [...readTime, blog];
        setReadTime(newReadTime);
    }
    console.log(readTime)
    const handleBookMark =(blog) =>{
    const newBookMark = [...bookMarks, blog]
    setBookMarks(newBookMark)

    }
    return (
        <>
       <div className='home-container'>
       <div className='mx-20 mt-10 blog-container'>
        {
            blogs.map(blog => <Blog
            blog= {blog} 
            key ={blog.id} 
            handleReadTime ={handleReadTime}
            handleBookMark ={handleBookMark}
            ></Blog>)
        }
         </div>
        <div className='side-container'>
            <SideBar
            readTime={readTime}
            bookMarks ={bookMarks}
            ></SideBar>
        </div>
       </div>
         
        </>
    );
};

export default Home;