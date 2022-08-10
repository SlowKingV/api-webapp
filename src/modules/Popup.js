import fetchShowInfo from './TvAPIConsumer.js';

export default class Popup {
  constructor(container) {
    this.container = container;
    this.elements = this.#getDOMElements();
  }

  close() {
    this.container.classList.add('hidden');
  }

  open() {
    fetchShowInfo(54).then((data) => { this.#putDataIntoDOM(data); });
    this.container.classList.remove('hidden');
  }

  #putDataIntoDOM(data) {
    this.elements.IMAGE.setAttribute('src', data.image.medium);
    this.elements.STATUS.textContent = data.status;
    this.elements.SUMMARY.innerHTML = data.summary;

    this.elements.DATA.NAME.innerHTML = `<b>Name: </b> ${data.name}`;
    this.elements.DATA.LANGUAGE.innerHTML = `<b>Language: </b> ${data.language}`;
    this.elements.DATA.GENRES.innerHTML = `<b>Genres: </b> ${Popup.#getListItems(data.genres)}`;
    this.elements.DATA.PREMIERED.innerHTML = `<b>Premiered: </b> ${data.premiered}`;
    this.elements.DATA.ENDED.innerHTML = `<b>Ended: </b> ${data.ended}`;
    this.elements.DATA.RATING.innerHTML = `<b>Rating: </b> ${data.rating.average}`;
    this.elements.DATA.NETWORK.innerHTML = `<b>Network: </b> <a href="${data.network.officialSite}">${data.network.name} (${data.network.country.code})</a>`;
  }

  #getDOMElements() {
    const BTN_CLOSE = this.container.querySelector('#btn-close');
    const IMAGE = this.container.querySelector('.image');
    const STATUS = this.container.querySelector('.status');
    const SUMMARY = this.container.querySelector('.summary');
    const DATA = Popup.#toObject(this.container.querySelector('.data').children);
    const COMMENTS = this.container.querySelector('#comments-list');
    const FORM = this.container.querySelector('#form-comments');

    return {
      BTN_CLOSE,
      IMAGE,
      STATUS,
      SUMMARY,
      DATA,
      COMMENTS,
      FORM,
    };
  }

  static #getListItems(array) {
    let html = '';

    array.forEach((item) => {
      html = html.concat(`<span>${item}</span>`);
    });

    return html;
  }

  static #toObject(children) {
    const result = {};

    Array.from(children).forEach((child) => {
      result[child.className.toUpperCase()] = child;
    });

    return result;
  }
}