import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;

  margin: 0;
  padding: 0;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  &:hover,
  &:focus {
    color: orangered;
  }
`;

export const Title = styled.h2`
  text-align: center;
`;

export const FilmName = styled.p`
  max-width: 240px;
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  text-align: center;
`;

export const Image = styled.img`
  display: block;
  width: 245px;
  height: 325px;
  transition: transform 0.3s linear;

  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`;
