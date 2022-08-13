const showsCounter = (array) => {
  const showsCounter = document.querySelector('.count');
  showsCounter.innerHTML = `top of the week  ${array.length}`;
};

export default showsCounter;