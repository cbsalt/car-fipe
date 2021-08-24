import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #ffffff;
    -webkit-font-smoothing: antialised;
  }
  body, input, button {
    font: 14px 'Montserrat', sans-serif;
  }
  a {
    display: contents;
    text-decoration: none;
  }
  h3 {
    font: 14px 'Montserrat', sans-serif;
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
