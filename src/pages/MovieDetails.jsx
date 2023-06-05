import { Loader } from 'components/loader/Loader';
import { MovieItem } from 'components/movie_item/MovieItem';
import {
  BackButton,
  DetailBatton,
} from 'components/styled_components/MovieDeatailButtons';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'servise/Api';
import { HiArrowLeft } from 'react-icons/hi2';

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
      <BackButton to={backLinkLocationRef.current}>
        <HiArrowLeft /> Back
      </BackButton>
      {status === 'responded' && <MovieItem movie={selectedMovie} />}

      <nav>
        <DetailBatton to="cast">Cast</DetailBatton>
        <DetailBatton to="reviews">Reviews</DetailBatton>
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
