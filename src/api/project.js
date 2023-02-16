import api from "./config";

const getProjects = () => {
  return api.get("/projects");
};
const getProject = (id) => {
  return api.get(`/projects/${id}`);
};
const addProject = (project) => {
  return api.post("/projects", project);
};
const deleteProject = (id) => {
  return api.delete(`/projects/${id}`);
};
const updateProject = (project) => {
  return api.put(`/projects/${project.id}`, project);
};

const getAllCategories = () => {
  return api.get("/categoryProjects");
};
const getCategory = (id) => {
  return api.get(`/categoryProjects/${id}?_embed=projects`);
};

export {
  getProjects,
  getProject,
  addProject,
  deleteProject,
  updateProject,
  getAllCategories,
  getCategory,
};
