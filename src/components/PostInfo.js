const PostInfo = ({ post }) => {
  return /*html*/ `
      <div class="card">
          <div class="card-body">
              <h5 class="card-title">${post.title}</h5>
                <p class="card-text">${post.content}</p>
              <a href="/#/posts/" class="btn btn-primary">Go somewhere</a>
          </div>
      </div>
      `;
};
export default PostInfo;
