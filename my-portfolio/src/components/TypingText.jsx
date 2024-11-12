import React, { useState, useEffect } from 'react';

const TypingText = ({ words, speed = 150, pause = 2000 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      if (isDeleting) {
        // 텍스트 지우기 애니메이션
        if (charIndex > 0) {
          setDisplayedText((prev) => prev.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        // 텍스트 입력 애니메이션
        if (charIndex < words[currentWordIndex].length) {
          setDisplayedText((prev) => prev + words[currentWordIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pause);
        }
      }
    };

    // 애니메이션 타이머 조정
    const timer = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, words, currentWordIndex, speed, pause]);

  return <span>{displayedText}</span>;
};

export default TypingText;