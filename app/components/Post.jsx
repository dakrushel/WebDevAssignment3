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
<<<<<<< Updated upstream
    <li className="p-3 my-5 bg-stone-200 text-stone-500" key={post.id}>
      <h1 className="font-bold">{post.title}</h1>
      <p>{post.description}</p>
      {/* Add onClick for Edit and Delete Button */}
      <button className="text-blue-600 mr-5" onClick={()=> setShowModalEdit(true)}>Edit</button> 
=======
    <li
      className="p-6 my-5 bg-blue-900 text-yellow-300 rounded-lg shadow-lg"
      key={post.id}
    >
      <h1 className="font-extrabold text-xl mb-2">Title: {post.title}</h1>
      <p className="mb-1">
        <span className="font-bold">Actors:</span> {post.actors}
      </p>
      <p className="mb-4">
        <span className="font-bold">Release Year:</span> {post.year}
      </p>

      <div className="flex space-x-3">
        {/* Edit Button */}
        <button
          className="bg-yellow-400 text-blue-900 font-bold px-4 py-2 rounded shadow hover:bg-yellow-500 transition"
          onClick={() => setShowModalEdit(true)}
        >
          Edit
        </button>
>>>>>>> Stashed changes

        {/* Delete Button */}
        <button
          className="bg-red-500 text-white font-bold px-4 py-2 rounded shadow hover:bg-red-600 transition"
          onClick={() => setShowModalDelete(true)}
        >
          Delete
        </button>
      </div>

      {/* Edit Modal */}
      <Modal showModal={showModalEdit} setShowModal={setShowModalEdit}>
<<<<<<< Updated upstream

        <form className="w-full px-5 pb-6" onSubmit={handleSubmit}>
          <h1 className="font-bold">Add or Update a Post</h1>
=======
        <form className="bg-blue-800 text-white text-xl p-6 rounded-lg" onSubmit={handleSubmit}>
          <h1 className="font-extrabold text-3xl mb-4">Edit Post</h1>
>>>>>>> Stashed changes
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="w-full p-3 mb-4 bg-blue-900  border border-yellow-400 rounded focus:outline-none"
            value={postToEdit.title}
            onChange={handleChange}
          />
          <input
            type="text"
<<<<<<< Updated upstream
            placeholder="Desciption"
            name="description"
            className="w-full p-3 my-3"
            value={postToEdit.description}
=======
            placeholder="Actors"
            name="actors"
            className="w-full p-3 mb-4 bg-blue-900  border border-yellow-400 rounded focus:outline-none"
            value={postToEdit.actors}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Release Year"
            name="year"
            className="w-full p-3 mb-4 bg-blue-900  border border-yellow-400 rounded focus:outline-none"
            value={postToEdit.year}
>>>>>>> Stashed changes
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-yellow-400 text-blue-900 font-bold px-6 py-2 rounded hover:bg-yellow-500 transition"
          >
            Submit
          </button>
        </form>
      </Modal>
<<<<<<< Updated upstream
      <button className="text-red-400 p-2" onClick={()=> setShowModalDelete(true)}>Delete</button>
      <Modal showModal={showModalDelete} setShowModal={setShowModalDelete}>
        <div className="flex flex-col justify-start space-y-4"> 
        <h2 className="text-center text-lg font-bold">Are you sure you want to Delete this post</h2>
      </div>
        <div className="flex justify-end w-full space-x-3">
          <button className="bg-green-500 text-white p-2 mr-5" onClick={()=> handleDeletePost(post.id)}>Yes</button>
          <button className="bg-red-500 text-white p-2" onClick={() => setShowModalDelete(false)}>No</button>
=======

      {/* Delete Modal */}
      <Modal showModal={showModalDelete} setShowModal={setShowModalDelete}>
        <div className="bg-blue-800 text-yellow-300 p-6 rounded-lg">
          <h2 className="text-center font-extrabold text-lg mb-6">
            Are you sure you want to delete this post?
          </h2>
          <div className="flex justify-between">
            <button
              className="bg-green-500 text-white font-bold px-6 py-2 rounded hover:bg-green-600 transition"
              onClick={() => handleDeletePost(post.id)}
            >
              Yes
            </button>
            <button
              className="bg-red-500 text-white font-bold px-6 py-2 rounded hover:bg-red-600 transition"
              onClick={() => setShowModalDelete(false)}
            >
              No
            </button>
          </div>
>>>>>>> Stashed changes
        </div>
      

      </Modal>
    </li>
  );
};

export default Post;