const postsContainer = document.getElementById('posts-container');
const loading = document.querySelector('.loader');
const filter = document.getElementById('filter');

const API_URL = 'https://jsonplaceholder.typicode.com';

let limit = 3;
let page = 1;

const getPosts = async () => {
  const res = await fetch(`${API_URL}/posts?_limit=${limit}&_page=${page}`);

  const data = await res.json();

  return data;
};

/**
 * @typedef {Object} Post
 * @property {number} id
 * @property {number} userId
 * @property {string} title
 * @property {string} body
 */

const showPosts = async () => {
  /**@type {Post []} */
  const posts = await getPosts();

  posts.forEach(post => {
    const postEl = document.createElement('div');
    postEl.classList.add('post');
    postEl.innerHTML = `
      <div class="number">${post.id}</div>
      <div class="post-info">
        <h2 class="post-title">${post.title}</h2>
        <p class="post-body">${post.body}</p>
      </div>
    `;
    postsContainer.appendChild(postEl);
  });
};

showPosts();