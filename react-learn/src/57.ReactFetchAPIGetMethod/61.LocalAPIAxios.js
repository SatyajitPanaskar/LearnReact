// api create

import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// GET Request Handler

export const getPosts = () => {
  return axiosInstance.get("/posts");
};

// Post Request Handler

export const createPost = (postData) => {
  return axiosInstance.post("/posts", postData);
};

// Put Request / update method
export const updatePost = (postId, updateData) => {
  return axiosInstance.put(`/posts/${postId}`, updateData);
};

// Delete request

export const deletePost = (postId) => {
  return axiosInstance.delete(`/posts/${postId}`);
};
