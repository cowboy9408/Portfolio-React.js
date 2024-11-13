import React, { useEffect } from 'react';
import {SectionContainer, LandingContainer, Title, Subtitle, IconContainer, TypingContainer} from '../styles/landingStyle';
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


const LandingPage = () => {
  useEffect(() => {
    // AOS 라이브러리를 초기화하여 스크롤 애니메이션을 설정합니다.
    AOS.init({
      duration: 1000, // 애니메이션의 지속 시간 (밀리초)
      easing: 'ease-in-out', // 애니메이션의 이징 효과
      once: true, // 애니메이션이 한 번만 실행되도록 설정
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
        <AboutMe /> 
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
        <Contact /> 
      </SectionContainer>
    </>
  );
};

export default LandingPage;
