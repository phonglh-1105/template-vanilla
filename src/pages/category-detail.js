import { getCategory } from "../api/project";
import { useEffect, useState } from "../lib";
const CategoryDetail = ({ id }) => {
  const [category, setCategories] = useState([]);

  useEffect(() => {
    getCategory(id).then((data) => setCategories(data));
  });
  return /*html*/ `
    <div>
      <a href="/#/category">Back to categories</a>
      <h1>${category?.name}</h1>
    </div>
      
      `;
};

export default CategoryDetail;
