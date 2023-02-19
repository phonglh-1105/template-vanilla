import { getPosts } from "../api/post";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PostList from "../components/PostList";
import { useEffect, useState } from "../lib";
const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts().then((data) => setPosts(data));
  }, []);
  return /*html*/ `
    ${Header()}
    <div class="tw-container">
      <h1>Posts</h1>
    ${PostList({ posts })}

    </div>
    ${Footer()}
    `;
};
export default PostsPage;
