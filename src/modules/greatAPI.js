import { getLikes, sendLikes } from './getlikes.js';

const likeBtn = document.createElement('button');
likeBtn.innerHTML = 'Like';
likeBtn.classList.add('like');
likeBtn.setAttribute('id', i);

const likeCount = document.createElement('p');
likeCount.classList.add('likeCounter');
likeCount.textContent = '';

getLikes(array[i].title, likeCount);

const postLike = (array) => {
  shows.addEventListener('click', (e) => {
    if (e.target.classList.contains('like')) {
      const { id } = e.target;
      const name = array[id].title;
      sendLikes(name);
    }
  });
};