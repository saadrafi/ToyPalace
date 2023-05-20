import React, { useState } from "react";

const SingleBlog = ({ blog }) => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <div>
      <div className=" h-44">
        <img src={blog.image} className="h-full w-full" alt="" />
      </div>
      <div className="p-3 space-y-4">
        <h1 className="text-xl text-center font-semibold">{blog.title}</h1>
        {seeMore ? (
          <p className="text-center">{blog.details}</p>
        ) : (
          <p className="text-center">{blog.details.slice(0, 100)}</p>
        )}
        <div className="w-full flex justify-center">
          <button
            className=" mx-auto link link-hover link-primary"
            onClick={() => setSeeMore(!seeMore)}
          >
            {seeMore ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
