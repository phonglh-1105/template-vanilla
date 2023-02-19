import Header from "../components/Header";
import PostInfo from "../components/postInfo";
import { useEffect, useState } from "../lib";

const PostDetail = ({ data: { id } }) => {
  const [post, setPost] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3000/posts/` + id)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.log(err));
  }, []);

  return /*html*/ `
    ${Header()}
    <div class="tw-container">
      <p>${post.title}</p>
      <p>${post.content}</p>


  
    </div>
    `;
};
export default PostDetail;
