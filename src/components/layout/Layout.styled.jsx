import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 5px 15px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 10px;
  margin-bottom: 15px;

  border-radius: 3px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0px 4px 10px 4px #9e9e9e;
`;

export const Nav = styled.nav`
  margin: 10px;
`;
