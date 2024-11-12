export const generateRandomSquares = (numSquares = 20) =>
    Array.from({ length: numSquares }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 20 + 10,
      duration: Math.random() * 20 + 5,
      delay: Math.random() * 5,
    }));
  
  export const INITIAL_LOADING_TIME = 1500;
  