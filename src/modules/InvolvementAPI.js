const BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

export const fetchComments = async (itemId) => {
  const response = await fetch(`${BASE_URL}/apps/0SbroHwilqPhRaF9QpdF/comments?item_id=${itemId}`);
  const comments = response.ok ? await response.json() : [];
  return comments;
};

export const postComent = async ({ itemId, username, comment }) => {
  await fetch(`${BASE_URL}/apps/0SbroHwilqPhRaF9QpdF/comments`, {
    method: 'POST',
    body: JSON.stringify({ item_id: itemId, username, comment }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};
