import instance from "./config";

const getPosts = () => {
  return instance.get("/posts");
};
const getPost = (id) => {
  return instance.get(`/posts/${id}`);
};
const createPost = (data) => {
  return instance.post("/posts", data);
};
const updatePost = (id, data) => {
  return instance.put(`/posts/${id}`, data);
};
const deletePost = (id) => {
  return instance.delete(`/posts/${id}`);
};

export { getPosts, getPost, createPost, updatePost, deletePost };
