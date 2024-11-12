import React from 'react';
import {Container, Box, Card, Title, Description } from '../styles/aboutMestyle';

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
