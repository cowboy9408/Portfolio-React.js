// LandingPage.js
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaGoogle, FaInstagram, FaComments, FaGithub } from 'react-icons/fa';
import SocialIcon from './SocialIcon';
import TypingText from './TypingText';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Timeline from './Timeline';
import Projects from './Projects';
import Contact from './Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SectionContainer = styled.section`
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
  }
`;

const LandingContainer = styled.section`
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

const Title = styled.h1`
  font-size: 2.5em;
  font-weight: 700;
  color: #e74c3c;
  margin: 0;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
  font-weight: 300;
  color: #ccc;
  display: flex;
  justify-content: center;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 1.5em;
  margin-top: 20px;
`;

const TypingContainer = styled.div`
  width: 100%;
  height: 28px;
  overflow: hidden;
`;





const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <>
      <LandingContainer>
        <Title data-aos="fade-up">Hi, I'm Byeongjun Kim.</Title>
        <Subtitle data-aos="fade-up" data-aos-delay="200">
          <TypingContainer>
            <TypingText words={["Welcome to my site!", "Nice to see you!", "Scroll down for more!" ]} />
          </TypingContainer>
        </Subtitle>
        <IconContainer data-aos="fade-up" data-aos-delay="400">
          <SocialIcon href="mailto:cowboy9408@naver.com" color="#1DA1F2" Icon={FaEnvelope} />
          <SocialIcon href="https://mail.google.com/mail/?view=cm&fs=1&to=qudwns9506@gmail.com" color="#4267B2" Icon={FaGoogle} />
          <SocialIcon href="https://www.instagram.com/cowboy9408/" color="#DB4437" Icon={FaInstagram} />
          <SocialIcon href="https://open.kakao.com/o/sXWRZtZg" color="#E60023" Icon={FaComments} />
          <SocialIcon href="https://github.com/cowboy9408" color="#0077B5" Icon={FaGithub} />
        </IconContainer>
      </LandingContainer>

      <SectionContainer id="about">
        <AboutMe /> {/* AboutMe 컴포넌트가 표시되는지 확인 */}
      </SectionContainer>

      <SectionContainer id="skills">
        <Skills />
      </SectionContainer>

      <SectionContainer id="timeline">
        <Timeline />
      </SectionContainer>

      <SectionContainer id="projects">
        <Projects />
      </SectionContainer>

      <SectionContainer id="contact">
        <Contact /> {/* Contact 컴포넌트가 표시되는지 확인 */}
      </SectionContainer>
    </>
  );
};

export default LandingPage;
