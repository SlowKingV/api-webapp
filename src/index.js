import './images/logomovi.png';
import './style.css';
import './popup.css';

// Import modules
import Popup from './modules/Popup.js';

const popup = new Popup(document.getElementById('popup'));
popup.elements.BTN_CLOSE.addEventListener('click', () => {
  popup.close();
});
document.getElementById('btn-open').addEventListener('click', () => {
  popup.open(34);
});

const form = document.getElementById('form-comments');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const comment = {
    itemId: `show${form.dataset.id}`,
    username: form.elements['input-name'].value,
    comment: form.elements['area-message'].value,
  };

  popup.submitComment(comment);
});
