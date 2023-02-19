const PostItem = ({ post }) => {
  return /*html*/ `
  <div><a href="#/post/${post.id}">${post.title}</a>
  <p>${post.content}</p>
  </div>
  `;
};

export default PostItem;
