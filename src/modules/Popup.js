import fetchShowInfo from './TvAPI.js';
import { fetchComments, postComent } from './InvolvementAPI.js';

export default class Popup {
  constructor(container) {
    this.container = container;
    this.elements = this.getDOMElements();
  }

  close() {
    this.container.classList.add('hidden');
    this.elements.LOADER.classList.remove('hidden');
  }

  async open(id) {
    this.container.classList.remove('hidden');
    this.data = await fetchShowInfo(id);
    this.comments = await fetchComments(id);
    this.putDataIntoDOM(this.data, this.comments);
    this.elements.LOADER.classList.add('hidden');
  }

  async submitComment(comment) {
    this.switchSubmitIcon('loading');
    await postComent(comment);
    this.comments = await fetchComments(comment.itemId);
    this.putDataIntoDOM(this.data, this.comments);
    this.elements.FORM.elements['input-name'].value = '';
    this.elements.FORM.elements['area-message'].value = '';
    this.elements.FORM.elements['button-submit'].disabled = false;
    this.switchSubmitIcon('finished');
    this.elements.FORM.elements['button-submit'].scrollIntoView();
    setTimeout(() => { this.switchSubmitIcon('send'); }, 3000);
  }

  putDataIntoDOM(data, comments) {
    this.elements.IMAGE.setAttribute('src', data.image.medium);
    const url = data.officialSite ? data.officialSite : data.url;
    this.elements.IMAGE_LINK.setAttribute('href', url);
    this.elements.STATUS.textContent = data.status;
    this.elements.SUMMARY.innerHTML = data.summary;

    this.elements.DATA.NAME.innerHTML = `<b>Name: </b> ${data.name}`;
    this.elements.DATA.LANGUAGE.innerHTML = `<b>Language: </b> ${data.language}`;
    this.elements.DATA.GENRES.innerHTML = `<b>Genres: </b> ${Popup.getListItems(data.genres)}`;
    this.elements.DATA.PREMIERED.innerHTML = `<b>Premiered: </b> ${data.premiered}`;
    this.elements.DATA.ENDED.innerHTML = `<b>Ended: </b> ${data.ended}`;
    this.elements.DATA.RATING.innerHTML = `<b>Rating: </b> ${data.rating.average}`;
    this.elements.DATA.NETWORK.innerHTML = `<b>Network: </b> <a href="${data.network.officialSite}">${data.network.name} (${data.network.country.code})</a>`;

    this.elements.COUNTER.textContent = comments.length;

    if (comments.length === 0) this.elements.COMMENTS.innerHTML = '<li class="comment empty"><strong>There\'s no comments for this show yet...</strong></li>';
    else {
      this.elements.COMMENTS.innerHTML = '';
      comments.forEach((comment) => {
        this.elements.COMMENTS.innerHTML += Popup.createComment(comment);
      });
    }

    this.elements.FORM.setAttribute('data-id', data.id);
  }

  getDOMElements() {
    const LOADER = this.container.querySelector('#loader-wrap');
    const BTN_CLOSE = this.container.querySelector('#btn-close');
    const IMAGE = this.container.querySelector('.image');
    const IMAGE_LINK = this.container.querySelector('.image-link');
    const STATUS = this.container.querySelector('.status');
    const SUMMARY = this.container.querySelector('.summary');
    const DATA = Popup.toObject(this.container.querySelector('.data').children);
    const COMMENTS = this.container.querySelector('#comments-list');
    const COUNTER = this.container.querySelector('#counter');
    const FORM = this.container.querySelector('#form-comments');

    return {
      LOADER,
      BTN_CLOSE,
      IMAGE,
      IMAGE_LINK,
      STATUS,
      SUMMARY,
      DATA,
      COMMENTS,
      COUNTER,
      FORM,
    };
  }

  switchSubmitIcon(status) {
    const button = this.elements.FORM.elements['button-submit'];
    Array.from(button.children).forEach((icon) => {
      if (icon.classList.contains(status)) icon.classList.remove('hidden');
      else icon.classList.add('hidden');
    });
  }

  static createComment({ creation_date: creationDate, comment, username }) {
    const string = `
<li class="comment">
  <p class="message">
    <b class="name">${username}</b>
    <time class="date" datetime="${creationDate}">${creationDate.replaceAll('-', '/')}</time>
    <span class="content">${comment}</span>
  </p>
</li>
`;

    return string;
  }

  static getListItems(array) {
    let html = '';

    array.forEach((item) => {
      html = html.concat(`<span>${item}</span>`);
    });

    return html;
  }

  static toObject(children) {
    const result = {};

    Array.from(children).forEach((child) => {
      result[child.className.toUpperCase()] = child;
    });

    return result;
  }
}