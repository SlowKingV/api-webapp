import showsCounter from '../src/counter.js';

const item = [{
  id: '2',
  name: 'Person of Interest',
}];

document.body.innerHTML = '<a href="#" class="count">TOP</a>';

test('check the counter fucntion ', () => {
  showsCounter(item);
  const number = document.querySelector('.counter').innerHTML;
  expect(number).toBe('counter 1');
});