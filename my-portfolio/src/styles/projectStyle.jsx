import styled from 'styled-components';


export const Title = styled.h1`
  text-align: center;
  font-size: 2.5em;
  color: #e74c3c;

`;

export const ProjectWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
`;

export const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 280px;
  border-radius: 20px;
  background: linear-gradient(145deg, #4a4a4a, #222);
  box-shadow: 
    6px 6px 12px rgba(0, 0, 0, 0.3),  /* 바깥 그림자를 줄이고 투명도 조정 */
    -6px -6px 12px rgba(255, 255, 255, 0.05), /* 밝은 양각 그림자 최소화 */
    inset 3px 3px 5px rgba(0, 0, 0, 0.4), /* 내부 어두운 음영 */
    inset -3px -3px 5px rgba(255, 255, 255, 0.1); /* 내부 밝은 음영 */
  padding: 20px;
  transition: all 0.3s ease;
  margin: ${({ side }) => (side === 'left' ? '0 0 0 auto' : '0 auto 0 0')};
  .highlight-link {
    color: #e74c3c;
    display: block;
    margin: 10px 0;
  }

  &:hover {
    box-shadow: 
      8px 8px 16px rgba(0, 0, 0, 0.3),
      -8px -8px 16px rgba(255, 255, 255, 0.05),
      inset 4px 4px 6px rgba(0, 0, 0, 0.5),
      inset -4px -4px 6px rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
  }
    `;

export const Tag = styled.span`
   background: #555;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  margin-right: 5px;
  font-size: 0.875rem;
  box-shadow: inset -2px -2px 5px rgba(0, 0, 0, 0.5), inset 2px 2px 5px rgba(255, 255, 255, 0.2);
  position:relative;
  top:5px;
`;