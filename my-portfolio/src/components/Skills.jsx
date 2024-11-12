import React, { useState } from 'react';
import {SkillsContainer, Container, Title, FilterButton, SkillItem} from '../styles/skillStyle';

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



function Skills() {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (category) => {
    setFilter(category);
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
        <FilterButton onClick={() => handleFilterChange('all')} active={filter === 'all'}>
          All
        </FilterButton>
        <FilterButton onClick={() => handleFilterChange('language')} active={filter === 'language'}>
          Languages
        </FilterButton>
        <FilterButton onClick={() => handleFilterChange('framework')} active={filter === 'framework'}>
          Frameworks
        </FilterButton>
        <FilterButton onClick={() => handleFilterChange('database')} active={filter === 'database'}>
          Database
        </FilterButton>
        <FilterButton onClick={() => handleFilterChange('tool')} active={filter === 'tool'}>
          Tools
        </FilterButton>
      </div>
      <SkillsContainer id="skills">
        {filteredSkills.map((skill, index) => (
          <SkillItem
            key={index}
            skill-type={skill.type}
            skill-weight={Math.ceil(skill.weight / 20)}
            weight={Math.ceil(skill.weight / 20)}
            data-aos="zoom-in"
          >
            <img src={skill.image} alt={`${skill.name} logo`} />
          </SkillItem>
        ))}
      </SkillsContainer>
    </Container>
  );
}

export default Skills;
