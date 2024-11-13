import React, { useState, useEffect } from 'react';

const TypingText = ({ words, speed = 150, pause = 2000 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0); // 현재 표시 중인 단어의 인덱스
  const [displayedText, setDisplayedText] = useState(''); // 화면에 표시되는 텍스트
  const [isDeleting, setIsDeleting] = useState(false); // 텍스트를 삭제 중인지 여부를 나타내는 상태
  const [charIndex, setCharIndex] = useState(0); // 현재 단어 내에서의 문자 인덱스

  useEffect(() => {
    const handleTyping = () => {
      if (isDeleting) {
        // 텍스트 지우기 애니메이션 로직
        if (charIndex > 0) {
          setDisplayedText((prev) => prev.substring(0, charIndex - 1)); // 현재 텍스트에서 한 글자 제거
          setCharIndex((prev) => prev - 1); 
        } else {
          setIsDeleting(false); // 지우기 완료 후 다시 입력 모드로 전환
          setCurrentWordIndex((prev) => (prev + 1) % words.length); // 다음 단어로 전환 (순환)
        }
      } else {
        // 텍스트 입력 애니메이션 로직
        if (charIndex < words[currentWordIndex].length) {
          setDisplayedText((prev) => prev + words[currentWordIndex][charIndex]); // 현재 단어에 다음 글자 추가
          setCharIndex((prev) => prev + 1); 
        } else {
          setTimeout(() => setIsDeleting(true), pause); // 단어 전체 입력 후 지우기 모드로 전환
        }
      }
    };

    // 애니메이션 속도 조정 (삭제 중일 때 속도 증가)
    const timer = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timer); // 타이머 정리
  }, [charIndex, isDeleting, words, currentWordIndex, speed, pause]);

  return <span>{displayedText}</span>; // 타이핑 효과 텍스트를 렌더링
};

export default TypingText;