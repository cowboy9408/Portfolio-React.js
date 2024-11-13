import React from 'react';
import {Container, Box, Card, Title, Description } from '../styles/aboutMestyle';

const AboutMe = () => (
  <Container>
    <Box>
      <Card>
        <Title data-aos="fade-up">About Me</Title>
        <Description data-aos="fade-down">
  <div className="qa-item">
    <p className="question">Q1. 본인을 한마디로 표현하자면?</p>
    <p className="answer">안녕하세요. 사용자 입장에서 바라보는, 언제나 사용자가 원하는 것이 무엇인지 고민하면서 꾸준히 성장하고 싶은 프론트엔드 개발자 김병준입니다.</p>
  </div>
  
  <div className="qa-item">
    <p className="question">Q2. 일하면서 가장 중요하게 생각하는 것은?</p>
    <p className="answer">책임감과 끈기라고 생각합니다. 나에게 주어진 일은 어떤 상황이라도 놓지 않고 끝까지 책임지는 것이 일을 하는 사람의 기본적인 덕목이라고 생각합니다. 프론트엔드 개발자라면 역지사지 마인드로 사용자 입장을 최우선시하고 그 중심을 토대로 한 개발을 추구해야된다고 생각합니다.</p>
  </div>
  
  <div className="qa-item">
    <p className="question">Q3. 앞으로의 목표는?</p>
    <p className="answer"> 시간이 얼마나 흐르든 신입의 자세로 끊임없이 배우고 공부해 나가며 제 부족한 부분을 채우고 성장 가능성에서만 그치지 않고 하루하루 성장하고 발전해 나가는 개발자가 되고싶습니다. 그리고 그 끝에는 누구나 사용하기 좋고 편하다고 인정하는 웹 페이지 및 웹 애플리케이션을 만들고싶습니다.</p>
  </div>
</Description>
      </Card>
     
    </Box>
  </Container>
);

export default AboutMe;
