import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html {
    width: 100vw;
    height: 100vh;
    font-family: 'Open Sans', 'Segoe UI', Tahoma, Arial, sans-serif;
  }
`;

export default GlobalStyles;
