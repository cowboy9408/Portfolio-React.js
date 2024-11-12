// App.js
import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import LandingPage from './components/LandingPage';
import FloatingSquare from './components/FloatingSquare'; // FloatingSquare 가져오기
import './vendors.min.css';
import './normalize.css';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgba(20, 20, 20, 1); /* 어두운 배경 */
    color: #fff;
    margin: 0;
    overflow-x: hidden;
  }
`;

const Preloader = styled.div`
  position: absolute;
  bottom: 30px;
  right: 50px;
  width: 100%;
  height: 100vh;
  background-color: rgba(20, 20, 20, 1); /* 밝은 배경 색상 */
  display: ${({ $isLoading }) => ($isLoading ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 1000;

   @media only screen and (max-width: 768px) {
    bottom: 10px;
    right: 20px;
    height: 90vh;
  }

  @media only screen and (max-width: 480px) {
    bottom: 5px;
    right: 10px;
    height: 80vh;
  }

`;

const Loader = styled.div`
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
    bottom: 10px;
    right: 20px;
    height: 90vh;
  }

  @media only screen and (max-width: 480px) {
    bottom: 5px;
    right: 10px;
    height: 80vh;
  }
`;
const spin = keyframes`
  0%, 100% { transform: translate(0); }
  25% { transform: translate(160%); }
  50% { transform: translate(160%, 160%); }
  75% { transform: translate(0, 160%); }
`;
const Spinner = styled.hr`
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



const BackgroundSquaresContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;

   @media only screen and (max-width: 768px) {
    bottom: 10px;
    right: 20px;
    height: 90vh;
  }

  @media only screen and (max-width: 480px) {
    bottom: 5px;
    right: 10px;
    height: 80vh;
  }
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [squares, setSquares] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // 사각형의 초기 위치 및 애니메이션 속성 설정
    const initialSquares = Array.from({ length: 20 }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 20 + 10,
      duration: Math.random() * 20 + 5,
      delay: Math.random() * 5,
    }));
    setSquares(initialSquares);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Preloader $isLoading={isLoading}>
  <Loader>
    <Spinner />
    <Spinner />
    <Spinner />
    <Spinner />
  </Loader>
</Preloader>
<BackgroundSquaresContainer>
  {!isLoading && squares.map((square, index) => (
    <FloatingSquare
      key={index}
      top={square.top}
      left={square.left}
      size={square.size}
      duration={square.duration}
      delay={square.delay}
    />
  ))}
</BackgroundSquaresContainer>
      {!isLoading && <LandingPage />}
    </>
  );
}

export default App;
