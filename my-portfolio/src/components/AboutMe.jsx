import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
margin: 0;
  padding: 10px 0;
`;

const Box = styled.div`
  display: flex;
  align-self: center;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  margin: 20px 0;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 700px;
  height: 500px;
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

const Title = styled.h1`
  font-size: 2.5em;
  color: #e74c3c;
  margin: 5px 0;
  position:relative;
  bottom: 5px;
`;

const Description = styled.p`
  font-size: 1.2em;
  color: #ccc;
  margin: 5px 0;
  line-height: 1.8;
  letter-spacing: 0.5px;
`;






const AboutMe = () => (
  <Container>
    <Box>
      <Card>
        <Title data-aos="fade-up">About Me</Title>
        <Description data-aos="fade-down">
          안녕하세요. 의사소통의 중요성과 무엇보다 모든 일엔 강한 책임감이 뒷받침 되어야 한다고 외치고 있는 2년차 프론트엔드 개발자 김병준입니다. 사용자 입장에서 바라보는, 언제나 사용자가 원하는 것이 무엇인지 고민하면서 꾸준히 성장하고 싶습니다. 놓지만 않으면 어떻게든 이루어낸다 라는 생각을 인생의 모토로 정하여 하루하루 책임감과 끈기를 가지고 열심히 정진하고 있습니다. 아직 프론트엔드에 대해 많이 부족하다는 현실에 직면할때면 조금은 좌절하지만, 아직 나한테는 위로 올라갈 부분이 무궁무진하구나 라고 한번 깨달으면서 많은 것을 알려고 하고 많은 것을 배우려고 노력하고 있습니다. 언제나 신입의 자세, 초심을 잃지 않고 끝임없이 저를 채찍질하고 발전을 갈망하는 개발자가 되기를 희망하고 그러기 위해 쉬지 않고 달리고 또 달리고 있습니다.
        </Description>
      </Card>
     
    </Box>
  </Container>
);

export default AboutMe;
