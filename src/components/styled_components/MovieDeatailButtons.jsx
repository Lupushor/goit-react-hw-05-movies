import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackButton = styled(Link)`
  display: inline-flex;
  margin: 10px;
  gap: 5px;
  padding: 5px 10px 5px 8px;
  border: 1px solid black;
  border-radius: 6px;
  width: 60px;
  align-items: center;
  text-decoration: none;

  &:hover {
    background-color: tomato;
    color: white;
  }
`;

export const DetailBatton = styled(Link)`
  display: inline-flex;
  margin: 10px;
  padding: 5px 15px;
  border: 1px solid black;
  border-radius: 6px;
  width: 50px;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: black;
  text-transform: uppercase;

  &:hover {
    background-color: tomato;
    color: white;
  }
`;
