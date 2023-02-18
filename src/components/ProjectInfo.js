const ProjectInfo = ({ project }) => {
  return /*html*/ `
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">${project.name}</h5>
            <a href="/#/projects/" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    `;
};
export default ProjectInfo;
