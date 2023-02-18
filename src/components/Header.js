import Nav from "./Nav";

const Header = () => {
  return `
  <header class="tw-bg-gray-900 tw-text-white tw-py-6">
    ${Nav()}
  </header>
  `;
};
export default Header;
