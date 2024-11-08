import React, { useState } from 'react';
import styled from 'styled-components';

const skillsData = {
  languages: [
    { name: 'JavaScript', weight: 80, image: 'https://img.shields.io/badge/-JavaScript-F7DF1E?&style=for-the-badge&logo=JavaScript&logoColor=white'},
    { name: 'Java', weight: 80, image:'https://img.shields.io/badge/-Java-b22222?&style=for-the-badge&logo=JavaScript&logoColor=white' },
  ],
  frameworks: [
    { name: 'React.js', weight: 70, image:'https://img.shields.io/badge/-React-61DAFB?&style=for-the-badge&logo=React&logoColor=white' },
    { name: 'Vue.js', weight: 70, image:'https://img.shields.io/badge/vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white' },
    { name:'Node.js', weight: 70, image:'https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white' },
    { name:'Express.js', weight: 70, image:'https://img.shields.io/badge/express-fff?style=for-the-badge&logo=express&logoColor=black' }
  ],
  database: [
    { name: 'MySQL', weight: 70, image:'https://img.shields.io/badge/MySQL-ffe4c4?style=for-the-badge&logo=MongoDB&logoColor=white' },
    { name: 'MongoDB', weight: 70, image:'https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white' }
  ],
  tools: [
    { name: 'Git', weight: 70, image:'https://img.shields.io/badge/-Git-F05032?&style=for-the-badge&logo=Git&logoColor=white' },
    { name: 'VSCode', weight: 70, image:'https://img.shields.io/badge/-Visual Studio Code-007ACC?&style=for-the-badge&logo=Visual Studio Code&logoColor=white' },
    { name: 'Figma', weight: 70, image:'https://img.shields.io/badge/Figma-ff1493?style=for-the-badge&logo=Figma&logoColor=white' },
  ],
};

const SkillsContainer = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-pack: center;
  justify-content: center;
  height: 150px; 

  div {
    padding: 0.2rem;
    transition: opacity 0.5s;

    &[skill-type='language'] {
      color: #e84a5f;
    }
    &[skill-type='framework'] {
      color: #ff847c;
    }
      &[skill-type='database'] {
      color: #ff847c;
    }
    &[skill-type='tool'] {
      color: #fecea8;
    }
  }

  div[skill-weight='1'] {
    font-size: 0.75rem;
    line-height: 0.25rem;
  }
  div[skill-weight='2'] {
    font-size: 1.25rem;
    line-height: 0.75rem;
  }
  div[skill-weight='3'] {
    font-size: 1.75rem;
    line-height: 1.25rem;
  }
  div[skill-weight='4'] {
    font-size: 2.25rem;
    line-height: 1.75rem;
  }
  div[skill-weight='5'] {
    font-size: 2.75rem;
    line-height: 2.25rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 350px;
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
  position:relative;
  bottom:70px;
`;

const FilterButton = styled.label`
  background: linear-gradient(
    145deg,
    rgba(100, 100, 105, 0.15) 15%,
    rgba(33, 33, 33, 0.4) 80%
  );
  box-shadow: -4px -3px 2px 0 rgba(250, 250, 250, 0.13),
    4px 4px 2px 0 rgba(0, 0, 0, 0.4);
  padding: 10px 30px;
  border-radius: 12px;
  margin: 10px;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  transition: all 0.3s ease;
  position:relative;
  bottom: 40px;

  &:hover {
    box-shadow: inset -4px -3px 2px rgba(250, 250, 250, 0.13),
      inset 4px 4px 2px rgba(0, 0, 0, 0.4);
  }
`;

const SkillItem = styled.div`
  position: relative;
  top: 10px;
  margin: 15px;
  padding: 20px;
  color: white;
  border-radius: 8px;
  display: inline-block;
  font-size: ${({ weight }) => 0.75 + 0.5 * weight}rem; /* 가중치에 따른 크기 조절 */
  line-height: ${({ weight }) => 0.25 + 0.5 * weight}rem;
  background: linear-gradient(145deg, #4a4a4a, #222); /* 3D 효과를 위한 배경 그라데이션 */
  box-shadow: 
    6px 6px 12px rgba(0, 0, 0, 0.3),  /* 바깥 그림자 */
    -6px -6px 12px rgba(255, 255, 255, 0.05), /* 밝은 양각 그림자 */
    inset 3px 3px 5px rgba(0, 0, 0, 0.4), /* 내부 어두운 음영 */
    inset -3px -3px 5px rgba(255, 255, 255, 0.1); /* 내부 밝은 음영 */
  transition: all 0.3s ease;
  

  &:hover {
    box-shadow: 
      8px 8px 16px rgba(0, 0, 0, 0.3),
      -8px -8px 16px rgba(255, 255, 255, 0.05),
      inset 4px 4px 6px rgba(0, 0, 0, 0.5),
      inset -4px -4px 6px rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Skills = () => {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (type) => {
    setFilter(type);
  };

  const filteredSkills = [
    ...(filter === 'all' || filter === 'language' ? skillsData.languages : []),
    ...(filter === 'all' || filter === 'framework' ? skillsData.frameworks : []),
    ...(filter === 'all' || filter === 'database' ? skillsData.database : []),
    ...(filter === 'all' || filter === 'tool' ? skillsData.tools : []),
  ];

  return (
    <Container>
      <Title>My Skills</Title>
      <div>
        <FilterButton onClick={() => handleFilterChange('all')}>All</FilterButton>
        <FilterButton onClick={() => handleFilterChange('language')}>Languages</FilterButton>
        <FilterButton onClick={() => handleFilterChange('framework')}>Frameworks</FilterButton>
        <FilterButton onClick={() => handleFilterChange('database')}>Database</FilterButton>
        <FilterButton onClick={() => handleFilterChange('tool')}>Tools</FilterButton>
      </div>
      <SkillsContainer id="skills">
        {filteredSkills.map((skill, index) => (
          <SkillItem
            key={index}
            skill-type={skill.type}
            skill-weight={Math.ceil(skill.weight / 20)}
            weight={Math.ceil(skill.weight / 20)} /* 가중치로 크기 조절 */
            data-aos="zoom-in"
          >

            <img src={skill.image} alt={`${skill.name} logo`} /> {/* 이미지만 렌더링 */}
          </SkillItem>
        ))}
      </SkillsContainer>
    </Container>
  );
};

export default Skills;
