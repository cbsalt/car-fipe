import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: Poppins;
    src: url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap') format('embedded-opentype');
  }
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #fff;
    -webkit-font-smoothing: antialised;
  }
  body, input, button {
    font: 14px Poppins, sans-serif;
  }
  #root {
    width: 100%;
    margin: 0 auto;
    padding: 0;
  }
  button {
    cursor: pointer;
  }
`;
