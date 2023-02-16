import { getProjects, deleteProject } from "../../api/project";
import { useEffect, useState } from "../../lib";

const AdminProjects = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const projects = await getProjects();
      setData(projects);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    btns.forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        const id = e.target.dataset.id;
        await deleteProject(id);
        const projects = await getProjects();
        setData(projects);
      });
    });
  }, [data]);

  return /*html*/ `
     <h1>Quan ly du an</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          ${data
            .map((project, index) => {
              return /*html*/ `
              <tr>
                <th scope="row">${index + 1}</th>
                <td>${project.name}</td>
                <td>
                  <a href="/#/admin/projects/${
                    project.id
                  }/edit" class="btn btn-primary">Edit</a>
                  <button data-id="${
                    project.id
                  }" class="btn btn-danger btn-remove">Remove</button>
                </td>
              </tr>
          `;
            })
            .join("")}
            
        </tbody>
      </table>
  `;
};
export default AdminProjects;
