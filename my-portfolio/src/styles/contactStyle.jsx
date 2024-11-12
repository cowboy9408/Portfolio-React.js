import styled from 'styled-components';


export const Title = styled.h1`
  font-size: 2.5em;
  color: #e74c3c;
  text-align: center;
`;

export const Subtitle = styled.p`
  font-size: 1.2em;
  color: #777;
  text-align: center;
`;

export const ContactIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

export const SocialLink = styled.a`
  color: white;
  font-size: 1.5em;
  transition: color 0.3s;

  &:hover {
    color: #e74c3c;
  }
`;