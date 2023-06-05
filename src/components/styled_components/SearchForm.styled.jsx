import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  padding: 5px 0;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  padding: 5px 25px;
  margin-left: 7px;
  border-radius: 4px;
  border: 1px solid grey;

  &:hover,
  &:focus {
    background-color: tomato;
    color: white;
    border: 1px solid tomato;
  }

  /* background-color: aqua; */
`;

export const Input = styled.input`
  min-width: 300px;
`;
