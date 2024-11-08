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
  width: 600px;
  height: 200px;
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
  bottom:45px;
`;

const Description = styled.p`
  font-size: 1.2em;
  color: #ccc;
  margin: 5px 0;
`;






const AboutMe = () => (
  <Container>
    <Box>
      <Card>
        <Title data-aos="fade-up">About Me</Title>
        <Description data-aos="fade-down">
          Hi! I'm Byeongjun Kim, a web developer with a passion for building interactive and responsive
          web applications. I enjoy learning new technologies and working on challenging projects.
        </Description>
      </Card>
     
    </Box>
  </Container>
);

export default AboutMe;
