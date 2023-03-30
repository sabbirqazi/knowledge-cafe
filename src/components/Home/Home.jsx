import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import SideBar from '../SideBar/SideBar'
const Home = () => {
    const [blogs, setBlogs] = useState([])
    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <>
        <div className='mx-20 mt-10'>
        {
            blogs.map(blog => <Blog
            blog= {blog} 
            key ={blog.id} ></Blog>)
        }
         </div>
         <div>
            <SideBar></SideBar>
         </div>
         
        </>
    );
};

export default Home;