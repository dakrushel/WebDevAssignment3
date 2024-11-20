import React from 'react'
import AddPost from '../components/AddPost'
import PostList from '../components/PostList'

// a component that when click will open a modal to add a post to my page
// another component to retrieve all posts from the database

 async function getData() {
  try {
    const res = await fetch("http://localhost:3000/api/posts", {cache: "no-store"});
    if(!res.ok) {
      console.error("API error: ", res.status, res.statusText);
      return [];
    }
      return res.json();
  } catch (error) {
    console.error("Fetch failed: ", error.message);
    return [];
  }
}
const page = async () => {
   let posts = [];

   try {
    posts = await getData();
   } catch (error) {
    console.error("Error fetching posts: ", error.message);
   }

  return (
    <main className='flex flex-col justify-between p-24'>
        <h1 className='p-5'>My Movies App</h1>
        <div>
            <AddPost />
            <PostList posts={posts} />
        </div>
    </main>
  )
}

export default page