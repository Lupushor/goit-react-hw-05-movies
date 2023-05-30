import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import { Link } from './Layout.styled';

export const Layout = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
