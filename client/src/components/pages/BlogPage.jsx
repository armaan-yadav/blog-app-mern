import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
const BlogPage = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/api/blog/getBlogById/${blogId}`, {
      method: "POST",
    }).then((response) => {
      response.json().then((e) => setBlog(e));
    });
  }, []);

  return blog ? (
    <div className="bg-gray-300 w-full min-h-[calc(100vh-66px)] ">
      <div className="container bg-red-100 sm:px-[10rem]">
        {" "}
        <div className="w-full h-[250px] object-contain bg-yellow-700 overflow-hidden">
          <img
            src={blog.imageUrl}
            alt=""
            className="object-contain h-full w-full"
          />
        </div>
        <h1 className="text-5xl">{blog.title}</h1>
        {parse(`${blog.content}`)}
      </div>
    </div>
  ) : (
    <div>error while fetching the blog</div>
  );
};

export default BlogPage;
