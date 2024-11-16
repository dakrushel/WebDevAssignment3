import React from 'react'
import AddPost from '../components/AddPost'
import PostList from '../components/PostList'

// a component that when click will open a modal to add a post to my page
// another component to retrieve all posts from the database

 async function getData() {
    const res = await fetch("http://localhost:3000/api/posts", {cache: "no-store"});
    if(!res.ok) {
      throw new Error("Failed to fetch Data");
    }
    return res.json();
}
const page = async () => {
   const posts = await getData()
   console.log(posts)
  return (
    <main className='flex flex-col justify-between p-24'>
        <h1 className='p-5'>My Posts App</h1>
        <div>
            <AddPost />
            <PostList post={posts}/>
        </div>
    </main>
  )
}

export default page