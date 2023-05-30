import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useParams();

  //   const [countries, setCountries] = useState([]);
  //   const [error, setError] = useState(null);
  //   const [isLoading, setIsLoading] = useState(false);

  //   useEffect(() => {
  //     setIsLoading(true);
  //   }, []);

  return <div>запрос обзоров для страницы кинофильма {movieId}</div>;
};
