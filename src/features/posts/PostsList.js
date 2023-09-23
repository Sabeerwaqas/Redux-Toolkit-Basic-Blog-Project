import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </article>
  ));

  return (
    <>
      <h2>Posts</h2>
      {renderedPosts}
    </>
  );
};

export default PostsList;
