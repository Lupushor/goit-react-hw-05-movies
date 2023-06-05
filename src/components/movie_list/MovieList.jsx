import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, Link, Image, FilmName } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(({ id, title, name, poster_path }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <Image
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w300${poster_path}`
                  : `https://sd.keepcalms.com/i-w300/keep-calm-poster-not-found.jpg`
              }
              alt={title}
            />
            <FilmName>{title || name}</FilmName>
          </Link>
        </li>
      ))}
    </List>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
