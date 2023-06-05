import { Loader } from 'components/loader/Loader';
import { MovieList } from 'components/movie_list/MovieList';
import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'servise/Api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');
    const fetchData = async () => {
      try {
        const data = await fetchTrendingMovies();
        setMovies(data);
        setStatus('responded');
      } catch {
        setStatus('rejected');
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {status === 'pending' && <Loader />}
      {status === 'rejected' && (
        <h2 textAlign="center">Something went wrong ...</h2>
      )}
      {status === 'responded' && movies.length > 0 && (
        <MovieList movies={movies} />
      )}
    </div>
  );
};

export default Home;
