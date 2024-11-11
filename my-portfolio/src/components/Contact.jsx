import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaGithub, FaCodepen, FaDev, FaLinkedin, FaTwitter } from 'react-icons/fa';

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
  const description = "Feel free to reach out to me on my social media channels!";
  const email = "your-email@example.com";
  const github = "your-github-username";
  const codepen = "your-codepen-username";
  const dev = "your-dev-username";
  const linkedin = "your-linkedin-username";
  const twitter = "your-twitter-username";

  return (
    <div>
      <Title>{title}</Title>
      <Subtitle>{description}</Subtitle>
      <ContactIcons>
        <SocialLink href={`mailto:${email}`} aria-label="E-Mail">
          <FaEnvelope />
        </SocialLink>
        <SocialLink href={`https://github.com/${github}`} target="_blank" rel="noreferrer" aria-label="GitHub">
          <FaGithub />
        </SocialLink>
        <SocialLink href={`https://codepen.io/${codepen}`} target="_blank" rel="noreferrer" aria-label="Codepen">
          <FaCodepen />
        </SocialLink>
        <SocialLink href={`https://dev.to/${dev}`} target="_blank" rel="noreferrer" aria-label="Dev">
          <FaDev />
        </SocialLink>
        <SocialLink href={`https://www.linkedin.com/in/${linkedin}`} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </SocialLink>
        <SocialLink href={`https://twitter.com/${twitter}`} target="_blank" rel="noreferrer" aria-label="Twitter">
          <FaTwitter />
        </SocialLink>
      </ContactIcons>
    </div>
  );
};

export default Contact;