import { getLikes, sendLikes } from './getLikes.js';

const hintLikes = (array) => {
  array.forEach((element) => {
    element.addEventListener('click', async () => {
      await sendLikes(element.id);
      await getLikes(element.id, element);
    });
  });
};

export default hintLikes;