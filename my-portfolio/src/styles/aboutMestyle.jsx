import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
margin: 0;
  padding: 10px 0;
`;

export const Box = styled.div`
  display: flex;
  align-self: center;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  margin: 20px 0;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 650px;
  border-radius: 20px;
  background: linear-gradient(145deg, #4a4a4a, #222);
  box-shadow: 
    6px 6px 12px rgba(0, 0, 0, 0.3),  /* 바깥 그림자를 줄이고 투명도 조정 */
    -6px -6px 12px rgba(255, 255, 255, 0.05), /* 밝은 양각 그림자 최소화 */
    inset 3px 3px 5px rgba(0, 0, 0, 0.4), /* 내부 어두운 음영 */
    inset -3px -3px 5px rgba(255, 255, 255, 0.1); /* 내부 밝은 음영 */
  padding: 20px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 
      8px 8px 16px rgba(0, 0, 0, 0.3),
      -8px -8px 16px rgba(255, 255, 255, 0.05),
      inset 4px 4px 6px rgba(0, 0, 0, 0.5),
      inset -4px -4px 6px rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
  }
`;

export const Title = styled.h1`
  font-size: 2.5em;
  color: #e74c3c;
  margin: 5px 0;
  position:relative;
  bottom: 5px;
`;

export const Description = styled.div`
       font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #222;                  /* 배경과 대비되는 진한 색상 */
  font-weight: 400;
  margin: 5px 0;
  text-align: left;              /* 전체 텍스트 왼쪽 정렬 */
  position: relative;
  top:10px;


  .qa-item {
    margin-bottom: 20px;
  }

  .question {
    font-weight: 600;
    color: #e74c3c;             /* 질문을 블루 톤으로 설정하여 시각적 구분 */
    margin-bottom: 20px;         /* 질문과 답변 사이 여백 */
  }

  .answer {
    color: #fff;                /* 차분하면서도 가독성 좋은 색상 */
    font-weight: 400;
    padding-left: 10px;         /* 답변을 약간 들여쓰기하여 구분감 */
    margin-bottom: 40px;
  }
`;