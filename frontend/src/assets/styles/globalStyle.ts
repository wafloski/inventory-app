import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap');
  
  html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body, a, button {
    font-family: 'Montserrat', sans-serif;
  }
`;

export default GlobalStyle;
