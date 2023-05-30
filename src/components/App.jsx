import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './layout/Layout';
import { Container } from './App.styled';

//1 метод
const Home = lazy(() => import('../pages/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Movies = lazy(() => import('../pages/Movies'));
const Cast = lazy(() => import('./cast/Cast'));

//2 метод
const Reviews = lazy(() =>
  import('./reviews/Reviews').then(module => ({
    ...module,
    default: module.Reviews,
  }))
);

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Container>
  );
};

//key API:  2d241d2c03071ceb6548b913b9b2401a

//Token for API: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDI0MWQyYzAzMDcxY2ViNjU0OGI5MTNiOWIyNDAxYSIsInN1YiI6IjY0MjJhYWRlMDhjZjg3MDBmZDg3ZjI3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A5myi80_DqCZL_812YpABQGJaHFKPt7T4wZ_OdRAGOk
