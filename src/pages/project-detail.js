import Header from "../components/Header";
import { router, useEffect, useState } from "../lib";
import ProjectGallery from "../components/ProjectGallery";
import ProjectInfo from "../components/ProjectInfo";

const ProjectDetail = ({ data: { id } }) => {
  const [project, setProject] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3000/projects/` + id)
      .then((res) => res.json())
      .then((data) => setProject(data))
      .catch((err) => console.log(err));
  }, []);

  return /*html*/ `
        ${Header()}
        <div class="tw-container">
        <div class="row">
            <div class="col-6">
            ${project ? ProjectGallery({ project }) : ""}
            </div>
            <div class="col-6">
            ${project ? ProjectInfo({ project }) : ""}
            </div>
        </div>
        </div>
    `;
};
export default ProjectDetail;
