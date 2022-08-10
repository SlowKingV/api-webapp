const LikeAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/bebc8dd1-7da3-4be4-85e9-6ad9997c621d/likes';

const sendLikes = (name) => {
  fetch(LikeAPI, {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({
      item_id: name,
    }),
  });
};

const getLikes = (name, button) => {
  fetch(LikeAPI).then(async (res) => {
    const likesData = await res.json();
    likesData.forEach((element) => {
      if (element.item_id === name) {
        const number = element.likes;
        button.innerHTML = `${number} likes`;
      }
    });
  });
};

export { sendLikes, getLikes, LikeAPI };