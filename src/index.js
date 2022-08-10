import './images/logomovi.png';
import './style.css';

const API_URL = 'https://api.tvmaze.com';
const showsInfo = [];
const shows = [2, 7, 11, 15, 22, 26];
const getShowsInfo = async () => {
  shows.forEach(async (show) => {
    const showResponse = await fetch(`${API_URL}/shows/${show}`);// show information
    const showData = await showResponse.json();
    showsInfo.push({ id: showData.id, name: showData.name, image: showData.image.medium });
  });
};
getShowsInfo().then(() => {
  console.log(showsInfo);
});
