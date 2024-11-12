import styled from 'styled-components';


export const SectionContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 100px 0; /* 상하 간격으로 살짝 띄우기 */

  @media only screen and (max-width: 768px) {
    padding: 15px;
  }

 @media only screen and (max-width: 480px) {
    padding: 10px;
    font-size: 14px;
    margin: 30px 0; /* 여백을 더 축소하여 화면에 맞추기 */

    h1, h2, h3 { /* 제목 크기 조정 */
      font-size: 1.2rem;
      text-align: center;
    }

    p { /* 본문 텍스트 크기 조정 */
      font-size: 0.9rem;
      text-align: center;
      margin: 5px 0;
    }

    /* 요소 간격을 줄여 화면을 꽉 채우도록 설정 */
    & > *:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

export const LandingContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  position: relative;
  padding: 0;
  margin: 0;
   @media only screen and (max-width: 768px) {
    padding: 15px;
  }

  @media only screen and (max-width: 480px) {
    padding: 10px;
    font-size: 14px;
  }
`;

export const Title = styled.h1`
  font-size: 2.5em;
  font-weight: 700;
  color: #e74c3c;
  margin: 0;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);

   @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.5em;
  font-weight: 300;
  color: #ccc;
  display: flex;
  justify-content: center;
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 1.5em;
  margin-top: 20px;

  @media only screen and (max-width: 768px) {
    gap: 10px;
    margin-top: 15px;
  }

  @media only screen and (max-width: 480px) {
    gap: 5px;
    margin-top: 10px;
  }
`;

export const TypingContainer = styled.div`
  width: 100%;
  height: 28px;
  overflow: hidden;
`;