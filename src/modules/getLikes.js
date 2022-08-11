const LikeAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/0SbroHwilqPhRaF9QpdF/likes';

const sendLikes = (name) => {
  fetch(LikeAPI, {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({
      item_id: name,
    }),
  });
};

const getLikes = async (name, button) => {
  const res = await fetch(LikeAPI);
  const likesData = await res.json();
  likesData.forEach((element) => {
    if (element.item_id === name) {
      const count = button.querySelector('.counter');
      const number = element.likes;
      count.innerHTML = `${number}`;
    }
  });
};

export { sendLikes, getLikes, LikeAPI };