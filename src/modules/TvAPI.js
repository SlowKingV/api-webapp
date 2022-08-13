const API_URL = 'https://api.tvmaze.com';

export default async (id) => {
  const response = await fetch(`${API_URL}/shows/${id}`);
  const data = await response.json();

  return data;
};