import './images/logowebapi.png';
import './style.css';
import './popup.css';

// Import modules
import Popup from './modules/Popup.js';
import showsCounter from './modules/counter.js';
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

getShowsInfo();
showsCounter(shows);

const popup = new Popup(document.getElementById('popup'));
popup.elements.BTN_CLOSE.addEventListener('click', () => {
  popup.close();
});
document.querySelectorAll('.btn-comments').forEach((button) => {
  button.addEventListener('click', (event) => {
    const button = event.currentTarget;
    popup.open(button.dataset.id);
  });
});

const form = document.getElementById('form-comments');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.elements['button-submit'].disabled = true;
  const comment = {
    itemId: form.dataset.id,
    username: form.elements['input-name'].value,
    comment: form.elements['area-message'].value,
  };

  popup.submitComment(comment);
});

// Exporting
export { showsInfo };
export { API_URL };
export { shows };
