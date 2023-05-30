import { Suspense, useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  //   const [countries, setCountries] = useState([]);
  //   const [error, setError] = useState(null);
  //   const [isLoading, setIsLoading] = useState(false);

  //   useEffect(() => {
  //     setIsLoading(true);
  //   }, []);

  return (
    <>
      <h1>MovieDetails: {movieId}</h1>
      <Link to={backLinkLocationRef.current}>Back</Link>
      <nav>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </nav>
      {/* <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
