import { getLikes, sendLikes } from './getLikes.js';

const hintLikes = (array) => {
  array.forEach((element) => {
    element.addEventListener('click', () => {
      sendLikes(element.id);
      getLikes(element.id, element);
    });
  });
};

export default hintLikes;