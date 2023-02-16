import Header from "../components/Header";
import ProjectList from "../components/ProjectList";
import { useEffect, useState } from "../lib";
import { getProjects } from "../api/project";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getProjects().then((data) => setProjects(data));
  }, []);
  return /*html*/ `
    ${Header()}
    <div class="container">
      <h1>Projects</h1>
    ${ProjectList({ projects })}
    </div>
  `;
};

export default ProjectsPage;
