/**
 * @jest-environment jsdom
 */

import getLikes from '../src/modules/getLikes.js';

jest.mock('../../src/__test__/getLikes.test.js');

const likeArray = Array.from(document.querySelectorAll('.like-btn'));
likeArray.forEach((element) => {
  element.id = element.getAttribute('id');
});

getLikes.mockImplementation(() => Promise.resolve({
  data: [
    {
      item_id: '1',
      likes: 1,
    },
    {
      item_id: '2',
      likes: 2,
    },
    {
      item_id: '3',
      likes: 3,
    },
    {
      item_id: '4',
      likes: 4,
    },
    {
      item_id: '5',
      likes: 5,
    },
    {
      item_id: '6',
      likes: 6,
    },
  ],
}));

const API_URL = 'https://api.tvmaze.com';
const showsInfo = [];
const shows = [2, 7, 11, 15, 22, 26];
const getShowsInfo = async () => {
  shows.forEach(async (show) => {
    const showResponse = await fetch(`${API_URL}/shows/${show}`);// show information
    const showData = await showResponse.json();
    showsInfo.push({ id: showData.id, name: showData.name, image: showData.image.medium });
  });
};
getShowsInfo().then(() => {
});

describe('getLikes', () => {
  it('should return a promise', () => {
    expect(getLikes()).toBeInstanceOf(Promise);
  });
  it('should return an array', () => {
    expect(getLikes()).resolves.toBeInstanceOf(Array);
  });
  it('should return an array of objects', () => {
    expect(getLikes()).resolves.toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          item_id: expect.any(String),
          likes: expect.any(Number),
        }),
      ]),
    );
  });
});

export { showsInfo };
export { API_URL };
export { shows };