import React, { useState, useEffect } from 'react';
import { GlobalStyle, Preloader, Loader, Spinner, BackgroundSquaresContainer } from './styles/appstyle';
import { generateRandomSquares, INITIAL_LOADING_TIME } from './utils/useapp';
import LandingPage from './components/LandingPage';
import FloatingSquare from './components/FloatingSquare';
import './vendors.min.css';
import './normalize.css';
import './responsive.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [squares, setSquares] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), INITIAL_LOADING_TIME);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setSquares(generateRandomSquares());
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
