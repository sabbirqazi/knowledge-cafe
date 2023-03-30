import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import SideBar from '../SideBar/SideBar'
import './Home.css'
const Home = () => {
    const [blogs, setBlogs] = useState([])
    const [readTime, setReadTime] = useState([])
    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
  
    const handleReadTime= (blog)=>{
        const newReadTime = [...readTime, blog];
        setReadTime(newReadTime);
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
            ></Blog>)
        }
         </div>
        <div className='side-container'>
            <SideBar
            readTime={readTime}
            ></SideBar>
        </div>
       </div>
         
        </>
    );
};

export default Home;