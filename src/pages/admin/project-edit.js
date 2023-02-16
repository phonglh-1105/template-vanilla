import { updateProject } from "../../api/project";
import { router, useEffect, useState } from "../../lib";
const AdminProjectEdit = ({ id }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("http://localhost:3000/projects/" + id)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  useEffect(() => {
    const form = document.getElementById("form-edit");
    const projectName = document.getElementById("name");
    const category = document.getElementById("category");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const data = {
        id,
        name: projectName.value,
        categoryProjectId: category.value,
      };
      await updateProject(data).then(() => {
        router.navigate("/admin/projects");
      });
    });
  });
  return /*html*/ `
        <h1>Chinh sua du an</h1>
        <form id="form-edit" class="w-50">
            <div class="form-group mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" value="${data.name}">
            </div>
            <div class="form-group mb-3">
                <label for="category" class="form-label">Category</label>
                <input type="text" class="form-control" id="category" value="${data.categoryProjectId}">
            </div>
            <div class="form-group mb-3">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>
    `;
};
export default AdminProjectEdit;
