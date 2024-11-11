import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaGoogle, FaInstagram, FaComments, FaGithub, FaPhone } from 'react-icons/fa';

const Title = styled.h1`
  font-size: 2.5em;
  color: #e74c3c;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  color: #777;
  text-align: center;
`;

const ContactIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const SocialLink = styled.a`
  color: white;
  font-size: 1.5em;
  transition: color 0.3s;

  &:hover {
    color: #e74c3c;
  }
`;

const Contact = () => {
  // 하드코딩된 정보
  const title = "Contact Me!";
  const description = "봐주셔서 감사합니다. 잘 부탁드리겠습니다.";
  const email = "mailto:cowboy9408@naver.com";
  const github = "https://github.com/cowboy9408";
  const googleMail = "https://mail.google.com/mail/?view=cm&fs=1&to=qudwns9506@gmail.com";
  const kakaoChat = "https://open.kakao.com/o/sXWRZtZg";
  const instagramDM = "https://www.instagram.com/cowboy9408/";
  const phone = "tel:+821028195192";

  return (
    <div>
      <Title>{title}</Title>
      <Subtitle>{description}</Subtitle>
      <ContactIcons>
        <SocialLink href={email} target="_blank" rel="noopener noreferrer">
          <FaEnvelope /> {/* 이메일 */}
        </SocialLink>
        <SocialLink href={googleMail} target="_blank" rel="noopener noreferrer">
          <FaGoogle /> {/* 구글 메일 */}
        </SocialLink>
        <SocialLink href={kakaoChat} target="_blank" rel="noopener noreferrer">
          <FaComments /> {/* 카카오톡 오픈 채팅 */}
        </SocialLink>
        <SocialLink href={instagramDM} target="_blank" rel="noopener noreferrer">
          <FaInstagram /> {/* 인스타그램 DM */}
        </SocialLink>
        <SocialLink href={github} target="_blank" rel="noopener noreferrer">
          <FaGithub /> {/* 깃허브 프로필 */}
        </SocialLink>
        <SocialLink href={phone}>
          <FaPhone /> {/* 휴대폰 */}
        </SocialLink>
      </ContactIcons>
    </div>
  );
};

export default Contact;