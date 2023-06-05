import { Loader } from 'components/loader/Loader';
import { MovieItem } from 'components/movie_item/MovieItem';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'servise/Api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [selectedMovie, setSelectedMovie] = useState({});
  const location = useLocation();

  const [status, setStatus] = useState('idle');
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    setStatus('pending');
    const getMovieSelect = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        setSelectedMovie(data);
        setStatus('responded');
      } catch {
        setStatus('rejected');
      }
    };
    getMovieSelect();
  }, [movieId]);

  return (
    <>
      <Link to={backLinkLocationRef.current}>Back</Link>
      {status === 'responded' && <MovieItem movie={selectedMovie} />}

      <nav>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </nav>
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <p>Something went wrong ...</p>}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
