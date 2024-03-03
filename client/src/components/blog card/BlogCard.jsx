import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  const { imageUrl, title, summary, _id: blogId, owner } = post;
  const [ownerName, setOwnerName] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/api/user/getUserById", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ owner }),
    }).then((response) => {
      response.json().then((e) => {
        setOwnerName(e.name);
      });
    });
  }, [post]);
  return (
    <Link to={`/${blogId}`}>
      <section className="my-4 bg-white mx-3 sm:mx-6 flex max-sm:flex-col gap-3 p-3">
        <div className="h-[200px] w-full sm:w-[600px] ">
          <img
            src={imageUrl}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-around">
          <h1 className="text-3xl font-[600] text-center sm:text-left">
            {title}
          </h1>
          <h3 className="text-lg font-semibold">
            {ownerName} <span className="font-light">| Date</span>
          </h3>
          <p className="hidden sm:block text-md">{summary}</p>
        </div>
      </section>
    </Link>
  );
};

export default BlogCard;
