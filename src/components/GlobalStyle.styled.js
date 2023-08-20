import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.secondaryBackgroundColor};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  /* width */
::-webkit-scrollbar {
  width: 6px;

  @media screen and (min-width:768px) {
    width: 8px;
  }
}

/* Track */
::-webkit-scrollbar-track {
  background: ${({ theme }) => theme.scrollbarBackground};
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.scrollbarColor};
  border-radius: 12px;
}
`;
