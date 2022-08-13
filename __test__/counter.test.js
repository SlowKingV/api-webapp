/**
 * @jest-environment jsdom
 */

import showsCounter from '../src/modules/counter.js';

const item = [{
  id: '2',
  name: 'Person of Interest',
}];

document.body.innerHTML = '<a href="#" class="count">TOP</a>';

test('check the counter function ', () => {
  showsCounter(item);
  const number = document.querySelector('.count').innerHTML;
  expect(number).toBe('count 1');
});