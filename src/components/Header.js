import Nav from "./Nav";

const Header = () => {
  return `
  <header>
    ${Nav()}
  </header>
  
  <h1 class="tw-text-3xl tw-font-bold">
    Hello world!
  </h1>
  `;
};
export default Header;
