import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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
    }

    body {
      width: 100%;
      height: 100%;
      font-family: Jost;
      font-weight: 400;
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
