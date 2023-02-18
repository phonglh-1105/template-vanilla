import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import { render, router } from "./lib";
import About from "./pages/about";
import AdminPage from "./pages/admin/admin";
import CategoryPage from "./pages/category";
import CategoryDetail from "./pages/category-detail";
import AdminProjectAdd from "./pages/admin/project-add";
import AdminProjectEdit from "./pages/admin/project-edit";
import AdminProjects from "./pages/admin/projects";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";
import PostsPage from "./pages/posts";
import ProjectDetail from "./pages/project-detail";
import ProjectsPage from "./pages/projects";
const app = document.querySelector("#app");

router.on("/", () => render(HomePage, app));
router.on("/about", () => render(About, app));
router.on("/posts", (id) => render(PostsPage, app));
router.on("/projects", () => render(ProjectsPage, app));
router.on("/contact", () => render(ContactPage, app));
router.on("/project/:id", (params) => render(() => ProjectDetail(params), app));

// categories
router.on("/category", () => render(CategoryPage, app));
router.on("/category/:id", ({ data }) =>
  render(() => CategoryDetail(data), app)
);
// admin
router.on("/admin", () => render(AdminPage, app));
router.on("/admin/projects", () => render(AdminProjects, app));
router.on("/admin/projects/:id/edit", ({ data }) =>
  render(() => AdminProjectEdit(data), app)
);
router.on("/admin/projects/add", () => render(AdminProjectAdd, app));
router.resolve();
