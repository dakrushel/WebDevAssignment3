<<<<<<< Updated upstream
import React from 'react'
import Post from './Post'
// const PostList = ({post}) => {
  const PostList = ({posts = [] }) => {
  return (
    <ul className='p-5'>
        {posts.map((post) => (
         <Post key={post.id} post={post} />
        ))}
=======
import React from "react";
import Post from "./Post";

const PostList = ({ posts = [] }) => {
  return (
    <ul className="p-5">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
>>>>>>> Stashed changes
    </ul>
  );
};

export default PostList;