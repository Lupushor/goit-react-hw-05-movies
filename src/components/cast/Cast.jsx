import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();

  //   const [countries, setCountries] = useState([]);
  //   const [error, setError] = useState(null);
  //   const [isLoading, setIsLoading] = useState(false);

  //   useEffect(() => {
  //     setIsLoading(true);
  //   }, []);

  return (
    <div>информации о актёрском составе для страницы кинофильма {movieId}</div>
  );
};

export default Cast;
