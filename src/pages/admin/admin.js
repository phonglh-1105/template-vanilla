import CategoryHome from "../../components/CategoryHome";
import ProjectsHome from "../../components/ProjectHome";
import { useEffect, useState } from "../../lib";
const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/categoryProjects")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  const onHandleClick = (id) => {
    fetch(`http://localhost:3000/categoryProjects/${id}?_embed=projects`)
      .then((response) => response.json())
      .then((data) => setProjects(data.projects));
  };
  return `
        ${CategoryHome({ categories, onClick: onHandleClick })}
        ${ProjectsHome({ projects })}
    `;
};
export default HomePage;
