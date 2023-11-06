import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Button, Container, Table } from "react-bootstrap";

function AxiosMethod() {
  const [data, SetData] = useState([]);

  // get data
  const fetchData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        SetData(response.data);
      })
      .catch((error) => {
        console.log("error geting data", error);
      });
  };

  // const
  const handleUpdatePost = (postId, updateData) => {
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${postId}`, updateData)
      .then((response) => {
        // Update the state with the updated post
        const updatedPosts = data.map((post) =>
          post.id === postId ? response.data : post
        );
        SetData(updatedPosts);
        console.log(updatedPosts);
      })
      .catch((error) => {
        console.error("Error updating post:", error);
      });
  };

  const handleDeletePost = (postId) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(() => {
        const updatedPosts = data.filter((post) => post.id !== postId);
        SetData(updatedPosts);
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h2> Axios Method</h2>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>Title</th>
              <th>Body</th>
              <th>Update Data</th>
              <th>Delete Data</th>
            </tr>
          </thead>
          <tbody>
            {data.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                  <Button
                    onClick={() =>
                      handleUpdatePost(post.id, {
                        title: "Updated Title",
                        body: "Updated Body",
                      })
                    }>
                    Update
                  </Button>
                </td>
                <td>
                  <Button onClick={() => handleDeletePost(post.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default AxiosMethod;
