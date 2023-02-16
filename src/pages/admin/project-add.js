import { addProject } from "../../api/project";
import { router, useEffect } from "../../lib";

const AdminProjectAdd = () => {
  useEffect(() => {
    const form = document.getElementById("form-add-project");
    const projectName = document.getElementById("project-name");
    const categoryProjectId = document.getElementById("categoryProjectId");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const data = {
        name: projectName.value,
        categoryProjectId: categoryProjectId.value,
      };
      await addProject(data);
      router.navigate("/admin/projects");
    });
  });
  return /*html*/ `
        <h1>Them du an</h1>
        <form id="form-add-project" class="w-50">
            <div class="form-group mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="project-name" name="name">
            </div>
            <div class="form-group mb-3">
                <label for="categoryProjectId" class="form-label">Category Project Id</label>
                <input type="text" class="form-control" id="categoryProjectId" name="categoryProjectId">
            </div>
            <div class="form-group mb-3">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>
    `;
};
export default AdminProjectAdd;
