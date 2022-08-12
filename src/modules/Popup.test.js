/**
 * @jest-environment jsdom
 */
import Popup from './Popup.js';

jest.mock('./TvAPI.js');
jest.mock('./InvolvementAPI.js');

window.HTMLElement.prototype.scrollIntoView = () => {};
document.body.innerHTML = `
  <div id="popup" class="hidden">
    <div id="loader-wrap"></div>
    <div id="btn-close"></div>
    <a class="image-link">
      <img class="image">
      <span class="status"></span>
    </a>
    <p class="summary"></p>
    <ul class="data">
      <li class="name"></li>
      <li class="language"></li>
      <li class="genres"></li>
      <li class="premiered"></li>
      <li class="ended"></li>
      <li class="rating"></li>
      <li class="network"></li>
    </ul>
    <i id="counter"></i>
    <ul id="comments-list"></ul>
    <form id="form-comments">
      <input id="input-name">
      <textarea id="area-message"></textarea>
      <button id="button-submit">
        <li class="send"></li>
        <li class="loading"></li>
        <li class="finished"></li>
      </button>
    </form>
  </div>
`;

const initialHTML = document.body.innerHTML;
const popup = new Popup(document.getElementById('popup'));
const showId = '38';

describe('Popup class initialization', () => {
  test('Container is correctly set', () => {
    expect(popup.container).toBe(document.getElementById('popup'));
  });

  test('Elements are correctly set', () => {
    const elements = {
      LOADER: popup.container.querySelector('#loader-wrap'),
      BTN_CLOSE: popup.container.querySelector('#btn-close'),
      IMAGE: popup.container.querySelector('.image'),
      IMAGE_LINK: popup.container.querySelector('.image-link'),
      STATUS: popup.container.querySelector('.status'),
      SUMMARY: popup.container.querySelector('.summary'),
      DATA: Popup.toObject(popup.container.querySelector('.data').children),
      COMMENTS: popup.container.querySelector('#comments-list'),
      COUNTER: popup.container.querySelector('#counter'),
      FORM: popup.container.querySelector('#form-comments'),
    };

    expect(popup.elements).toEqual(elements);
  });
});

describe('When opening the Popup', () => {
  popup.open(showId);
  test('Is visible', () => {
    expect(popup.container.classList).not.toContain('hidden');
  });

  test('Contains the data', () => {
    expect(popup.data).toBeDefined();
  });

  test('Contains the comments', () => {
    expect(popup.comments).toBeDefined();
  });

  test('Put the data into the DOM', () => {
    expect(document.body.innerHTML).not.toBe(initialHTML);
  });

  test('Hide loader window', () => {
    expect(popup.elements.LOADER.classList).toContain('hidden');
  });
});

describe('On comment submit', () => {
  const comment = { itemId: showId, username: 'Test user', comment: 'Test comment' };
  const commentsCount = popup.elements.COMMENTS.children.length;
  popup.submitComment(comment);

  test('Submit the comment', () => {
    expect(popup.comments[0]).toBeDefined();
  });

  test('Comment data is correct', () => {
    expect(popup.comments[0]).toEqual({ comment: comment.comment, username: comment.username, creation_date: '2022-8-12' });
  });

  test('Comment put into DOM', () => {
    expect(popup.elements.COMMENTS.children.length).toBe(commentsCount + 1);
  });
});
