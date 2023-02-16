import { menuList } from "../data";

const Nav = () => {
  return /*html*/ `
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">ASM</a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
          ${menuList
            .map(
              (item) =>
                `<li class="nav-item active"><a class="nav-link" href="${item.path}">${item.name}</a></li>`
            )
            .join("")} 
          </ul>
        </div>
      </nav>
  `;
};
export default Nav;
