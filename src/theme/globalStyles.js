import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: inherit
    }

    html {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
      scroll-behavior: smooth;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    body {
      width: 100%;
      height: 100%;
      font-family: Jost;
      font-weight: 400;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-rendering: optimizeLegibility;
    }

    #root {
      width: 100%;
      height: 100%;
    }

    body::-webkit-scrollbar {
      width: 4px;
    }

    body::-webkit-scrollbar-thumb {
      background: #c2c2c2;
      border-radius: 10px;
    }

    ::selection{
      background-color: #2a99d1;
    }
`;

export default GlobalStyles;
