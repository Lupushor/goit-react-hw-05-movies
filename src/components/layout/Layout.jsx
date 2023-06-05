import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Header, Link, Nav } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
