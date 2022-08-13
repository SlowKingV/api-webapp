const showsCounter = (array) => {
  const showsCounter = document.querySelector('.count');
  showsCounter.innerHTML = `count ${array.length}`;
};

export default showsCounter;