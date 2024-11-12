import styled, { createGlobalStyle, keyframes } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgba(20, 20, 20, 1);
    color: #fff;
    margin: 0;
    overflow-x: hidden;

    @media only screen and (max-width: 768px) {
      font-size: 15px;
    }

    @media only screen and (max-width: 480px) {
      font-size: 14px;
      padding: 0;
      margin: 0;
      width: 100vw;
      height: 100vh;
    }
  }
`;

export const Preloader = styled.div`
  position: absolute;
  bottom: 30px;
  right: 50px;
  width: 100%;
  height: 100vh;
  background-color: rgba(20, 20, 20, 1);
  display: ${({ $isLoading }) => ($isLoading ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 1000;

  @media only screen and (max-width: 768px) {
    height: 100vh;
  }

  @media only screen and (max-width: 480px) {
    height: 100vh;
    margin: 0;
    padding: 0;
  }
`;

export const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 80px;
    height: 80px;
  }

  @media only screen and (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`;

export const spin = keyframes`
  0%, 100% { transform: translate(0); }
  25% { transform: translate(160%); }
  50% { transform: translate(160%, 160%); }
  75% { transform: translate(0, 160%); }
`;

export const Spinner = styled.hr`
  border: 0;
  margin: 0;
  width: 40%;
  height: 40%;
  position: absolute;
  border-radius: 50%;
  animation:${spin} 2s ease infinite;
  
  &:first-child { background: #ffff; animation-delay: -1.5s; }
  &:nth-child(2) { background: #e74c3c; animation-delay: -1s; }
  &:nth-child(3) { background: #ffff; animation-delay: -0.5s; }
  &:last-child { background: #e74c3c; }
`;

export const BackgroundSquaresContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;

  @media only screen and (max-width: 768px) {
    height: 100vh;
  }

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
