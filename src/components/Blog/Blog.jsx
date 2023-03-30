import React from "react";
import './Blog.css'
const Blog = ({ blog }) => {
  const {
    id,
    blog_title,
    author_name,
    blog_cover_image,
    read_time,
    publish_date,
    author_image,
  } = blog;
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={blog_cover_image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
         <div className="flex justify-between">
            <div className="flex">
             <div>
                <img className="author-img" src={author_image} alt="" />
             </div>
             <div className="">
                <h5>{author_name}</h5>
                <p>{publish_date}</p>
             </div>
            </div>
            <div className="flex">
             <p>{read_time} mins to read</p>
             <a className="btn">Bookmark</a>
            </div>
         </div>
          <h2 className="card-title">{blog_title}</h2>
          
          <div className="card-actions justify-end">
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;