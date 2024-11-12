import styled from 'styled-components';

export const SkillsContainer = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-pack: center;
  justify-content: center;
  height: 150px; 

  div {
    padding: 0.2rem;
    transition: opacity 0.5s;

    &[skill-type='language'] {
      color: #e84a5f;
    }
    &[skill-type='framework'] {
      color: #ff847c;
    }
      &[skill-type='database'] {
      color: #ff847c;
    }
    &[skill-type='tool'] {
      color: #fecea8;
    }
  }

  div[skill-weight='1'] {
    font-size: 0.75rem;
    line-height: 0.25rem;
  }
  div[skill-weight='2'] {
    font-size: 1.25rem;
    line-height: 0.75rem;
  }
  div[skill-weight='3'] {
    font-size: 1.75rem;
    line-height: 1.25rem;
  }
  div[skill-weight='4'] {
    font-size: 2.25rem;
    line-height: 1.75rem;
  }
  div[skill-weight='5'] {
    font-size: 2.75rem;
    line-height: 2.25rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 350px;
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
  position:relative;
  bottom:70px;
`;

export const FilterButton = styled.label`
   background: linear-gradient(
    145deg,
    rgba(100, 100, 105, 0.15) 15%,
    rgba(33, 33, 33, 0.4) 80%
  );
  box-shadow: ${(props) =>
    props.active
      ? 'inset -4px -3px 2px rgba(250, 250, 250, 0.13), inset 4px 4px 2px rgba(0, 0, 0, 0.4)'
      : '-4px -3px 2px 0 rgba(250, 250, 250, 0.13), 4px 4px 2px 0 rgba(0, 0, 0, 0.4)'};
  padding: 10px 30px;
  border-radius: 12px;
  margin: 10px;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  transition: all 0.3s ease;
  position: relative;
  bottom: 40px;

  &:hover {
    box-shadow: inset -4px -3px 2px rgba(250, 250, 250, 0.13),
      inset 4px 4px 2px rgba(0, 0, 0, 0.4);
  }
`;

export const SkillItem = styled.div`
  position: relative;
  top: 10px;
  margin: 15px;
  padding: 20px;
  color: white;
  border-radius: 8px;
  display: inline-block;
  font-size: ${({ weight }) => 0.75 + 0.5 * weight}rem; /* 가중치에 따른 크기 조절 */
  line-height: ${({ weight }) => 0.25 + 0.5 * weight}rem;
  background: linear-gradient(145deg, #4a4a4a, #222); /* 3D 효과를 위한 배경 그라데이션 */
  box-shadow: 
    6px 6px 12px rgba(0, 0, 0, 0.3),  /* 바깥 그림자 */
    -6px -6px 12px rgba(255, 255, 255, 0.05), /* 밝은 양각 그림자 */
    inset 3px 3px 5px rgba(0, 0, 0, 0.4), /* 내부 어두운 음영 */
    inset -3px -3px 5px rgba(255, 255, 255, 0.1); /* 내부 밝은 음영 */
  transition: all 0.3s ease;
  

  &:hover {
    box-shadow: 
      8px 8px 16px rgba(0, 0, 0, 0.3),
      -8px -8px 16px rgba(255, 255, 255, 0.05),
      inset 4px 4px 6px rgba(0, 0, 0, 0.5),
      inset -4px -4px 6px rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;