const ProjectItem = ({ project }) => {
  return /*html*/ `
     <div><a href="#/project/${project.id}">${project.name}</a></div>
     `;
};
export default ProjectItem;
