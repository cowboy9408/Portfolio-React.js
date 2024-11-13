// 랜덤하게 배치된 사각형들을 생성하는 함수
export const generateRandomSquares = (numSquares = 20) => // 기본적으로 20개의 사각형을 생성
    Array.from({ length: numSquares }).map(() => ({ // numSquares 길이만큼의 배열을 생성하고 각 요소에 대해 객체를 반환
      top: Math.random() * 100, // 화면 상단에서의 랜덤 위치 (0~100%)
      left: Math.random() * 100, // 화면 왼쪽에서의 랜덤 위치 (0~100%)
      size: Math.random() * 20 + 10, // 사각형의 크기 (10~30px 범위)
      duration: Math.random() * 20 + 5, // 애니메이션 지속 시간 (5~25초 범위)
      delay: Math.random() * 5, // 애니메이션 지연 시간 (0~5초 범위)
    }));
  
// 로딩 화면이 유지되는 초기 시간 (밀리초 단위)
export const INITIAL_LOADING_TIME = 1500;
