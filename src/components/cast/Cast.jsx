import { Loader } from 'components/loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'servise/Api';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');
    const getMoviesCredits = async () => {
      try {
        const cast = await fetchMovieCredits(movieId);
        setCast(cast);
        setStatus('responded');
      } catch {
        setStatus('rejected');
      }
    };
    getMoviesCredits();
  }, [movieId]);

  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <p>Something went wrong ...</p>}

      {status === 'responded' && (
        <ul>
          {cast.map(({ id, profile_path, original_name, character }) => {
            return (
              <li key={id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w200${profile_path}`
                      : 'https://kartinkin.net/uploads/posts/2022-03/1647018833_14-kartinkin-net-p-anonim-kartinki-20.jpg'
                  }
                  alt={original_name}
                  width={200}
                />
                <p>Имя: {original_name}</p>
                <p>Персонаж: {character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Cast;
