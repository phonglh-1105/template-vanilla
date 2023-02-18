import { menuList } from "../data";

const Nav = () => {
  return /*html*/ `
      <div class="tw-container tw-mx-auto tw-flex tw-justify-between tw-items-center tw-px-4">
        <h1 class="tw-text-xl tw-font-bold"><a href="/" class="tw-no-underline tw-text-white">My Portfolio</a></h1>
        <nav>
          <ul class="tw-flex">
          ${menuList
            .map(
              (item) => /*html*/ `
              <li class="tw-ml-6"><a class="hover:tw-text-gray-400 tw-text-white tw-no-underline tw-font-poppins" href="${item.path}">${item.name}</a></li>`
            )
            .join("")}  
          </ul>
        </nav>
      </div>
  `;
};
export default Nav;
