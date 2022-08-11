import './images/logomovi.png';
import './style.css';

import hintLikes from './modules/greatAPI.js';
import { getLikes } from './modules/getLikes.js';

const API_URL = 'https://api.tvmaze.com';
const showsInfo = [];
const shows = [2, 7, 11, 15, 22, 26];
const likeArray = Array.from(document.querySelectorAll('.like-btn'));
likeArray.forEach((element) => {
  element.id = element.getAttribute('id');
});

hintLikes(likeArray);
window.onload = () => {
  likeArray.forEach((element) => {
    getLikes(element.id, element);
  });
};

const getShowsInfo = async () => {
  shows.forEach(async (show) => {
    const showResponse = await fetch(`${API_URL}/shows/${show}`);// show information
    const showData = await showResponse.json();
    showsInfo.push({ id: showData.id, name: showData.name, image: showData.image.medium });
  });
};
getShowsInfo().then(() => {
});

export { showsInfo };
export { API_URL };
export { shows };