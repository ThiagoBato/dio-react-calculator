import { createGlobalStyle, styled } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
  }
  body {
    background-color: #caaaaa;
  }
  h1{
    color: #eee;
    margin: 20px auto;
    text-align: center;
  }
`;
export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1200px) {
    padding: 0 20px;
  }
`;

export const CalcContainer = styled.div`
  max-width: 215px;
  margin: auto;
  display: flex;
  flex-flow: column wrap;
  gap: 10px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  gap: 5px;
`;
