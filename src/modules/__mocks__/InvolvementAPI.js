const database = {
  test: [
    {
      comment: 'Test comment 1',
      username: 'Tester',
      creation_date: '2022-8-12',
    },
  ],
};

export const fetchComments = (id) => {
  const comments = database[id];
  return Promise.resolve(comments || []);
};

export const postComent = ({ itemId, username, comment }) => {
  if (!database[itemId]) database[itemId] = [];
  database[itemId].push({ comment, username, creation_date: '2022-8-12' });
};