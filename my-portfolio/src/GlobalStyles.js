import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html, body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.base};
    font-size: ${({ theme }) => theme.fontSize.base};
    height: 100%;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.colors.text};
    }
  }

  .highlight-link {
    box-shadow: inset 0 -0.125rem 0 ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    &:hover {
      box-shadow: inset 0 -2rem 0 ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;

export default GlobalStyles;