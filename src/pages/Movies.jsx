import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([
    'movie-1',
    'movie-2',
    'movie-3',
    'movie-4',
    'movie-5',
    'movie-6',
  ]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId') ?? '';

  //   useEffect(() => {
  //     запрос
  //   }, []);

  const updateQueryString = e => {
    if (e.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieId: e.target.value });
  };

  const visibleMovie = movies.filter(movie => movie.includes(movieId));

  console.log(location);

  return (
    <div>
      <input type="text" value={movieId} onChange={updateQueryString} />
      <ul>
        {visibleMovie.map(movie => {
          return (
            <li key={movie}>
              <Link to={`${movie}`} state={{ from: location }}>
                {movie}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
