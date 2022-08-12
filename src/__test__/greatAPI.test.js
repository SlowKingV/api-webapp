import hintLikes from '../modules/getLikes.js';

test('hintLikes should return an array', () => {
  expect(hintLikes([])).toBeInstanceOf(Array);
});

test(hintLikes / 0, () => {
  hintLikes()(hintLikes([]));
}).toBeInstanceOf(Array);

test('hintLikes should return an array of objects', () => {
  expect(hintLikes([])).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        image: expect.any(String),
      }),
    ]),
  );
});