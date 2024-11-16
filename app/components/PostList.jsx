import React from 'react'
import Post from './Post'
const PostList = ({post}) => {
  return (
    <ul className='p-5'>
        {post.map(post => (
         <Post key={post.id} post={post} />
        ))}
    </ul>
  )
}

export default PostList