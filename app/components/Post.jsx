'use client'
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Modal from "./Modal";


const Post = ({ post }) => {
  const router = useRouter()
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [postToEdit, setPostToEdit] = useState(post);
  const [showModalDelete, setShowModalDelete] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(`api/posts/${postToEdit.id}`, postToEdit)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setPostToEdit({});
        setShowModalEdit(false);
        router.refresh()
      });
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    console.log("This is the value of e",e)
    setPostToEdit((prevState)=>({...prevState, [name]: value}));
  }

  const handleDeletePost = (id) => {
    axios
    .delete(`api/posts/${id}`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      setShowModalDelete(false)
      router.refresh()
    });
  }

  return (
    <li className="p-3 my-5 bg-stone-200 text-stone-500" key={post.id}>
      <h1 className="font-bold">{post.title}</h1>
      <p>{post.actors}</p>
      <p>{post.year}</p>

      {/* Add onClick for Edit and Delete Button */}
      <button className="text-blue-600 mr-5" onClick={()=> setShowModalEdit(true)}>Edit</button> 

      <Modal showModal={showModalEdit} setShowModal={setShowModalEdit}>

        <form className="w-full px-5 pb-6" onSubmit={handleSubmit}>
          <h1 className="font-bold">Add or Update a Post</h1>
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="w-full p-3 my-3"
            value={postToEdit.title}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Actors"
            name="description"
            className="w-full p-3 my-3"
            value={postToEdit.actors}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Release Year"
            name="description"
            className="w-full p-3 my-3"
            value={postToEdit.year}
            onChange={handleChange}
          />
          <button type="submit" className="bg-red-400 text-white px-5 py-2">
            Submit
          </button>
        </form>
      </Modal>
      <button className="text-red-400 p-2" onClick={()=> setShowModalDelete(true)}>Delete</button>
      <Modal showModal={showModalDelete} setShowModal={setShowModalDelete}>
        <div className="flex flex-col justify-start space-y-4"> 
        <h2 className="text-center text-lg font-bold">Are you sure you want to Delete this post</h2>
      </div>
        <div className="flex justify-end w-full space-x-3">
          <button className="bg-green-500 text-white p-2 mr-5" onClick={()=> handleDeletePost(post.id)}>Yes</button>
          <button className="bg-red-500 text-white p-2" onClick={() => setShowModalDelete(false)}>No</button>
        </div>
      </Modal>
    </li>
  );
};

export default Post;
