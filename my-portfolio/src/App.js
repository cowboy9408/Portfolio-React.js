import React, { useState, useEffect } from 'react'; 
import { GlobalStyle, Preloader, Loader, Spinner, BackgroundSquaresContainer } from './styles/appstyle'; 
import { generateRandomSquares, INITIAL_LOADING_TIME } from './utils/useapp'; 
import LandingPage from './components/LandingPage'; 
import FloatingSquare from './components/FloatingSquare'; 
import './vendors.min.css'; 
import './normalize.css'; 
import './responsive.css'; 

function App() {
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태를 관리하는 상태 변수
  const [squares, setSquares] = useState([]); // 플로팅 스퀘어의 배열을 관리하는 상태 변수

  useEffect(() => {
    // 페이지가 로드될 때 로딩 상태를 해제하는 타이머 설정
    const timer = setTimeout(() => setIsLoading(false), INITIAL_LOADING_TIME);
    return () => clearTimeout(timer); // 컴포넌트가 언마운트될 때 타이머를 정리
  }, []);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 랜덤 스퀘어를 생성하여 상태에 저장
    setSquares(generateRandomSquares());
  }, []);

  return (
    <>
      <GlobalStyle /> 
      <Preloader $isLoading={isLoading}> {/* 로딩 중일 때만 표시되는 프리로더 */}
        <Loader>
          <Spinner />
          <Spinner />
          <Spinner />
          <Spinner />
        </Loader>
      </Preloader>
      <BackgroundSquaresContainer> 
        {!isLoading && squares.map((square, index) => ( // 로딩이 끝나면 스퀘어를 렌더링
          <FloatingSquare
            key={index} // 각 스퀘어에 고유한 키 할당
            top={square.top}
            left={square.left}
            size={square.size}
            duration={square.duration}
            delay={square.delay}
          />
        ))}
      </BackgroundSquaresContainer>
      {!isLoading && <LandingPage />} {/* 로딩이 끝나면 랜딩 페이지를 표시 */}
    </>
  );
}

export default App; 
