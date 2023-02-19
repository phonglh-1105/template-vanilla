import PostItem from "./PostItem";

const PostList = ({ posts }) => {
  return `
    ${posts.map((post) => `${PostItem({ post })}`).join("")}
  `;
};

export default PostList;
