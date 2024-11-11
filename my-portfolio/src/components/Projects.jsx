// Projects.js
import React from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

// 예제 프로젝트 데이터 (실제 데이터는 props로 전달 가능)
const projectData = [

];

const githubRepos = [
 {
  name: 'Project Xafe',
  description: 'AED(자동 심장 충격기) 보관함 원격 모니터링 서비스 웹 애플리케이션입니다. 이 작업을 통해 javascript에 대해 좀 심도있게 알게되었고, 양방향 데이터 바인딩에 대해 이해하게 되었습니다.',
  html_url: 'https://github.com/cowboy9408/Xafe-Vue.js-',
  topics: ['JavaScript', 'Vue.js']
 },
 {
  name: 'Project BJMCU',
  description: 'MCU 모듈을 웹페이지와 연결하고 위치 정보를 기반으로 해당 모듈에서 센서 데이터가 수집되고 일정 시간마다 데이터가 정상적으로 갱신이 되는지 테스트하는 웹페이지이다. javascript를 이용해 서버를 구축의 경험과 Express.js와 미들웨어에 대해 이해하게 되었다. ',
  html_url: 'https://github.com/cowboy9408/BJMCU-Node.js-',
  topics: ['JavaScript', 'Node.js', 'Express.js', 'MongoDB']
 },
 {
  name: 'Project Xchat',
  description: '실시간 메신저 웹 애플리케이션이다. styled-component를 사용하고 있으며, 이 개발을 통해 코드 가독성과 유지보수성에 대해 많은 생각을 하게 되었다. 또 use 훅에 대해 좀더 깊이 있게 알게되었다.',
  html_url: 'https://github.com/cowboy9408/Xchat-react.js-',
  topics: ['JavaScript', 'React.js', 'styled-component',]
 },

];

const Title = styled.h1`
  text-align: center;
  font-size: 2.5em;
  color: #e74c3c;

`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 280px;
  border-radius: 20px;
  background: linear-gradient(145deg, #4a4a4a, #222);
  box-shadow: 
    6px 6px 12px rgba(0, 0, 0, 0.3),  /* 바깥 그림자를 줄이고 투명도 조정 */
    -6px -6px 12px rgba(255, 255, 255, 0.05), /* 밝은 양각 그림자 최소화 */
    inset 3px 3px 5px rgba(0, 0, 0, 0.4), /* 내부 어두운 음영 */
    inset -3px -3px 5px rgba(255, 255, 255, 0.1); /* 내부 밝은 음영 */
  padding: 20px;
  transition: all 0.3s ease;
  margin: ${({ side }) => (side === 'left' ? '0 0 0 auto' : '0 auto 0 0')};
  .highlight-link {
    color: #e74c3c;
    display: block;
    margin: 10px 0;
  }

  &:hover {
    box-shadow: 
      8px 8px 16px rgba(0, 0, 0, 0.3),
      -8px -8px 16px rgba(255, 255, 255, 0.05),
      inset 4px 4px 6px rgba(0, 0, 0, 0.5),
      inset -4px -4px 6px rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
  }
    `;


const Tag = styled.span`
   background: #555;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  margin-right: 5px;
  font-size: 0.875rem;
  box-shadow: inset -2px -2px 5px rgba(0, 0, 0, 0.5), inset 2px 2px 5px rgba(255, 255, 255, 0.2);
  position:relative;
  top:5px;
`;


const Projects = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <div>
      <Title>My Projects</Title>
      <ProjectWrapper>
        {projectData.map((project, index) => (
          <ProjectCard key={index} data-aos="zoom-in-down">
            <h3>{project.name}</h3>
            <p>{project.descr}</p>
            {project.demo && (
              <a className="highlight-link" href={project.demo} target="_blank" rel="noreferrer">
                Demo
              </a>
            )}
            <div>
              {project.tags?.map((tag, i) => (
                <Tag key={i}>{tag.tag}</Tag>
              ))}
            </div>
          </ProjectCard>
        ))}

        {githubRepos.map((repo, index) => (
          <ProjectCard key={index} data-aos="zoom-in-down">
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            {repo.homepage && (
              <a className="highlight-link" href={repo.homepage} target="_blank" rel="noreferrer">
                Demo
              </a>
            )}
            <a className="highlight-link" href={repo.html_url} target="_blank" rel="noreferrer">
              Github
            </a>
            <div>
              {repo.topics?.map((topic, i) => (
                <Tag key={i}>{topic}</Tag>
              ))}
            </div>
          </ProjectCard>
        ))}
      </ProjectWrapper>
    </div>
  );
};

export default Projects;
