import styled from 'styled-components';

export const Button = styled.button`
  background-color: #efefef;
  border-radius: 5px;
  border: none;
  padding: 10px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #fff;
  }
`;
