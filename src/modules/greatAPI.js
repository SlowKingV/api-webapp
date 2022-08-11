import { getLikes, sendLikes } from './getLikes.js';
import shows from '../index.js';

const hintLikes = (array) => {
  array.forEach((element) => {
    const button = document.getElementById(element.id);
    button.addEventListener('click', () => {
      sendLikes(element.id);
      getLikes(element.id, button);
    });
  });
};

const likeBtn = document.createElement('button');
likeBtn.innerHTML = 'likes';
likeBtn.classList.add('like');
likeBtn.setAttribute('id', i);

Node.cloneNode(likeBtn);

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
export { postLike, hintLikes };