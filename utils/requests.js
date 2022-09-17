const API_KEY = process.env.API_KEY;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchTrending: {
    title: "Trending",
    urls: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    urls: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    title: "Action",
    urls: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    urls: `/discover/movies?api_key=${API_KEY}&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    urls: `/discover/movies?api_key=${API_KEY}&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    urls: `/discover/movies?api_key=${API_KEY}&with_genres10749`,
  },
  fetchMystery: {
    title: "Mystery",
    urls: `/discover/movies?api_key=${API_KEY}&with_genres=9648`,
  },
  fetchWestern: {
    title: "Western",
    urls: `/discover/movies?api_key=${API_KEY}&with_genres=37`,
  },
  fetchAnimation: {
    title: "Animation",
    urls: `/discover/movies?api_key=${API_KEY}&with_genres=16`,
  },
  fetchTV: {
    title: "TV Movies",
    urls: `/discover/movies?api_key=${API_KEY}&with_genres=10770`,
  },
};
