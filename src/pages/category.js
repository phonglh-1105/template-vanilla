import { getAllCategories } from "../api/project";
import { useEffect, useState } from "../lib";

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getAllCategories().then((data) => setCategories(data));
  }, []);
  return /*html*/ `
    <div>
      <h1>Categories</h1>
      <ul>
        ${categories
          .map(
            (item) => /*html*/ `
          <li>
            <a href="/category/${item.id}">${item.name}</a>
            </li>
            `
          )
          .join("")}
      </ul>
    </div>
  `;
};
export default CategoryPage;
