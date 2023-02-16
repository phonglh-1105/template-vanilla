import Header from "../components/Header";
import { router, useEffect, useState } from "../lib";
import ProjectGallery from "../components/ProjectGallery";
import ProjectInfo from "../components/ProjectInfo";

const ProjectDetail = () => {
  const [project, setProject] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:3000/projects/` + id)
      .then((res) => res.json())
      .then((data) => setProject(data))
      .catch((err) => console.log(err));
  }, []);

  return /*html*/ `
        ${Header.render()}
        <div class="container">
        <div class="row">
            <div class="col-6">
            ${project ? ProjectGallery.render(project) : ""}
            </div>
            <div class="col-6">
            ${project ? ProjectInfo.render(project) : ""}
            </div>
        </div>
        </div>
    `;
};
export default ProjectDetail;
