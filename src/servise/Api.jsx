import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = `2d241d2c03071ceb6548b913b9b2401a`;

export async function fetchTrendingMovies() {
  const response = await axios.get(`trending/all/day?api_key=${API_KEY}`);
  return response.data.results;
}

export async function fetchMoviesBySearch(query) {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  );
  return response.data.results;
}

export async function fetchMovieDetails(movieId) {
  const response = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US&external_source=imdb_id`
  );

  return response.data;
}

export async function fetchMovieCredits(movieId) {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
}

export async function fetchMovieReviews(movieId) {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data.results;
}
