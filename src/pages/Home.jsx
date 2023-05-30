import { Loader } from 'components/loader/Loader';
import { MovieList } from 'components/movie_list/MovieList';
import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'servise/Api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const data = await fetchTrendingMovies();
        setMovies(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <h2 textAlign="center">Something went wrong ...</h2>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default Home;
