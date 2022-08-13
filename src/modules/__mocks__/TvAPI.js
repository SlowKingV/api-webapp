const sampleData = JSON.parse(`{
  "id": 38,
  "url": "https://www.tvmaze.com/shows/38/z-nation",
  "name": "Z Nation",
  "type": "Scripted",
  "language": "English",
  "genres": [
      "Action",
      "Horror",
      "Science-Fiction"
  ],
  "status": "Ended",
  "runtime": 60,
  "averageRuntime": 61,
  "premiered": "2014-09-12",
  "ended": "2018-12-28",
  "officialSite": "http://www.syfy.com/znation",
  "schedule": {
      "time": "21:00",
      "days": [
          "Friday"
      ]
  },
  "rating": {
      "average": 7.3
  },
  "weight": 95,
  "network": {
      "id": 16,
      "name": "Syfy",
      "country": {
          "name": "United States",
          "code": "US",
          "timezone": "America/New_York"
      },
      "officialSite": null
  },
  "webChannel": null,
  "dvdCountry": null,
  "externals": {
      "tvrage": 41883,
      "thetvdb": 280494,
      "imdb": "tt3843168"
  },
  "image": {
      "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/170/426759.jpg",
      "original": "https://static.tvmaze.com/uploads/images/original_untouched/170/426759.jpg"
  },
  "summary": "<p><b>Z Nation</b> starts three years after the zombie virus has gutted the country, a team of everyday heroes must transport the only known survivor of the plague from New York to California, where the last functioning viral lab waits for his blood. Although the antibodies he carries are the world's last, best hope for a vaccine, he hides a dark secret that threatens them all. With humankind's survival at stake, the ragtag band embarks on a journey of survival across three thousand miles of rusted-out post-apocalyptic America.</p>",
  "updated": 1659951895,
  "_links": {
      "self": {
          "href": "https://api.tvmaze.com/shows/38"
      },
      "previousepisode": {
          "href": "https://api.tvmaze.com/episodes/1578229"
      }
  }
}`);

export default (id) => {
  sampleData.id = id;
  return Promise.resolve(sampleData);
};