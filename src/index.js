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
  popup.open(61);
});
