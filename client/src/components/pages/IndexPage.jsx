import React, { useContext, useEffect, useState } from "react";
import Post from "../blog card/BlogCard";
import { UserContext } from "../../context/UserContext";

const IndexPage = () => {
  const [posts, setPosts] = useState([]);
  const { userId } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:5000/api/blog/all-blogs", {
      method: "GET",
    }).then((response) => {
      response.json().then((posts) => setPosts(posts));
    });
  }, []);

  return (
    <section>
      {posts.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </section>
  );
};

export default IndexPage;
