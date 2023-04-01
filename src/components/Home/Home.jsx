import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import SideBar from "../SideBar/SideBar";
import "./Home.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [readTime, setReadTime] = useState([]);
  const [bookMarks, setBookMarks] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleReadTime = (blog) => {
    const newReadTime = [...readTime, blog];
    setReadTime(newReadTime);
  };

  const handleBookMark = (blog) => {
    const newBookMark = [...bookMarks];
    const blogIndex = newBookMark.findIndex((b) => b.id === blog.id);
    if (blogIndex === -1) {
      newBookMark.push(blog);
      setBookMarks(newBookMark);
    } else {
      toast("You Have Already Bookmarked This Blog");
    }
  };

  return (
    <>
      <div className="home-container">
        <div className="blog-container">
          {blogs.map((blog) => (
            <Blog
              blog={blog}
              key={blog.id}
              handleReadTime={handleReadTime}
              handleBookMark={handleBookMark}
            ></Blog>
          ))}
        </div>
        <div className="side-container">
          <ToastContainer></ToastContainer>
          <SideBar readTime={readTime} bookMarks={bookMarks}></SideBar>
        </div>
      </div>
    </>
  );
};

export default Home;
