import { createGlobalStyle } from 'styled-components';

import colors from './global/colors';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
  }
  #root {
    display: flex;
    flex-direction: column;
  }
  body, button {
    font-family: Poppins, sans-serif;
    background: ${colors.background};
    -webkit-font-smoothing: antialiased !important;
  }
  body, input, button {
    color: ${colors.title};
    font-weight: 300;
    font-size: 14px;
  }
  a, button {
    cursor: pointer;
    outline: none;
    font-weight: 300;
  }
  h1 {
    font-size: 40px;
    font-weight: 300;
  }
  h2 {
    font-size: 20px;
    font-weight: 300;
  }
  h3 {
    font-size: 17px;
    font-weight: 300;
  }
  a:focus,
  button:focus,
  a:active,
  button:active,
  a:visited,
  button:visited {
    outline: none;
    border: none;
  }
`;
