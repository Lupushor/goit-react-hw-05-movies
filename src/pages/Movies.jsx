import { Loader } from 'components/loader/Loader';
import { MovieList } from 'components/movie_list/MovieList';
import {
  Button,
  Input,
  SearchForm,
} from 'components/search_form/SearchForm.styled';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesBySearch } from 'servise/Api';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const getMovies = async () => {
      try {
        setStatus('pending');
        const movies = await fetchMoviesBySearch(query);
        setMovies(movies);
        setStatus('responded');
      } catch {
        setStatus('rejected');
      }
    };
    if (query) {
      getMovies();
    }
  }, [query]);

  function onSubmit(e) {
    e.preventDefault();
    const { value } = e.target.query;
    const query = value.trim() ? { query: value } : {};
    setSearchParams(query);
  }

  return (
    <div>
      <SearchForm onSubmit={onSubmit}>
        <Input type="text" name="query" placeholder="Search movies" />
        <Button type="submit">Find</Button>
      </SearchForm>
      {status === 'responded' && <MovieList movies={movies} />}
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <p>Something went wrong ...</p>}
    </div>
  );
};

export default Movies;
