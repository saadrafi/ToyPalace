import React, { useEffect, useState } from "react";
import SingleBlog from "./SingleBlog";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);
  return (
    <div className="w-[90%] mx-auto my-10">
      <div className=" space-y-2 font-serif my-3">
        <h1 className="text-4xl font-bold  text-primary">LEGO Blogs</h1>
        <p className="text-lg">Read All About</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <SingleBlog blog={blog} key={blog._id}></SingleBlog>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
