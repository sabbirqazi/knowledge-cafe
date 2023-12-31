import React from "react";

import "./Blog.css";

const Blog = ({ blog, handleReadTime, handleBookMark }) => {
  const {
    tag,
    blog_title,
    author_name,
    blog_cover_image,
    read_time,
    publish_date,
    author_image,
  } = blog;


  return (
    <>
      <div className="card bg-base-100 my-8 shadow-xl">
        <figure>
          <img className="rounded" src={blog_cover_image} />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <div className="flex gap-2.5">
              <div>
                <img className="author-img" src={author_image} alt="" />
              </div>
              <div className="">
                <h5 className="text-xl font-bold">{author_name}</h5>
                <p>{publish_date}</p>
              </div>
            </div>
            <div className="bookmark-icon flex gap-2">
              <p>{read_time} mins read</p>
              <a onClick={() => handleBookMark(blog)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <h2 className="card-title text-3xl font-bold">{blog_title}</h2>
          <p>{tag}</p>
          <div className="">
            <button className="underline font-semibold text-xl text-indigo-700"
              
              onClick={() => {
                handleReadTime(blog);
              }}
            >
              Mark as read
            </button>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Blog;
