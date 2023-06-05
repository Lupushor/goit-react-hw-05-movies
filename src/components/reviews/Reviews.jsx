import { Loader } from 'components/loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'servise/Api';
import { List, Text } from './Reviews.styled';

export const Reviews = () => {
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        setStatus('pending');
        const data = await fetchMovieReviews(movieId);
        setResults(data);
        setStatus('responded');
      } catch {
        setStatus('rejected');
      }
    };

    getMovieReviews(movieId);
  }, [movieId]);

  return (
    <>
      {status === 'responded' && results.length === 0 ? (
        <h2>There are no reviews</h2>
      ) : (
        <List>
          {results.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h3>Author: {author}</h3>
                <Text>{content}</Text>
              </li>
            );
          })}
        </List>
      )}
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <h2>Something went wrong...</h2>}
    </>
  );
};
