import React from 'react';

import styled, { keyframes } from 'styled-components';

const outWaveIn = keyframes`
  to {
    stroke-width: 10px;
    stroke-dasharray: 400;
  }
`;

const outWaveOut = keyframes`
  from {
    stroke-width: 10px;
    stroke-dasharray: 400;
  }
  to {
    stroke: #ffffff;
    stroke-width: 5px;
    stroke-dasharray: 40;
  }
`;

const IconWrapper = styled.a`
  position: relative;
  display: inline-block;
  width: 100px;
  height: 100px;
  text-align: center;
  .circle {
    fill: none;
    stroke: #ffffff;
    stroke-width: 5px;
    stroke-dasharray: 40;
    transition: all 0.2s ease-in-out;
    animation: ${outWaveOut} 1s cubic-bezier(0.42, 0.0, 0.58, 1.0) forwards;
  }
  .social {
    color: white;
    font-size: 1.8em;
    position: relative;
    bottom: 99px;
    left: 0;
    width: 100%;
    height: 100%;
    line-height: 100px;
    transition: color 0.5s ease-in-out;
  }
      &:hover .social {
    color: ${({ color }) => color};
  }
  &:hover .circle {
    fill: #ffffff;
    fill-opacity: 1;
    animation: ${outWaveIn} 1s cubic-bezier(0.42, 0.0, 0.58, 1.0) forwards;
  }

`;

const SocialIcon = ({ href, color, Icon }) => (
  <IconWrapper href={href} color={color}>
    <svg viewBox="0 0 200 200" className="circle">
      <circle cx="100" cy="100" r="50" />
    </svg>
    <div className="social">
      <Icon />
    </div>
  </IconWrapper>
);

export default SocialIcon;
