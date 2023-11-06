import React, { useEffect, useState } from "react";
import { deletePost, getPosts, updatePost } from "./61.LocalAPIAxios";
import { Button } from "react-bootstrap/Button";

function GetDataAPI() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", body: "" });
  // Get Request
  useEffect(() => {
    getPosts()
      .then((response) => {
        setPosts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  //   Update Post
  const handleUpdatePost = (postId, updatedData) => {
    updatePost(postId, updatedData)
      .then((response) => {
        // Update the state with the updated post
        const updatedPosts = posts.map((post) =>
          post.id === postId ? response.data : post
        );
        setPosts(updatedPosts);
        console.log(updatedPosts);
      })
      .catch((error) => {
        console.error("Error updating post:", error);
      });
  };
  //   Delete Request
  const handleDeletePost = (postId) => {
    deletePost(postId)
      .then(() => {
        const updatedPosts = posts.filter((post) => post.id !== postId);
        setPosts(updatedPosts);
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };
  return (
    <>
      <h1> Posts Data </h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button
              onClick={() =>
                handleUpdatePost(post.id, {
                  title: "Updated Title",
                  body: "Updated Body",
                })
              }>
              Update
            </button>
            <button onClick={() => handleDeletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default GetDataAPI;
