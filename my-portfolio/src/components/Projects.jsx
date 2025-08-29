import React from "react";
import {
  Title,
  ProjectWrapper,
  ProjectCard,
  Tag,
} from "../styles/projectStyle";
import AOS from "aos";
import "aos/dist/aos.css";

// 예제 프로젝트 데이터 (실제 데이터는 props로 전달 가능)
const projectData = [];

const githubRepos = [
  {
    name: "Project Xafe",
    description:
      "AED(자동 심장 충격기) 보관함 원격 모니터링 서비스 웹 애플리케이션입니다. 이 작업을 통해 Vue.js와 javascript에 대해 좀 심도있게 알게되었고, 양방향 데이터 바인딩에 대해 이해하게 되었습니다. 무엇보다 협업과 의사소통의 중요성을 몸소 실감하게 되었습니다.",
    html_url: "https://github.com/cowboy9408/Xafe-Vue.js-",
    topics: ["JavaScript", "Vue.js"],
  },
  {
    name: "Project BJMCU",
    description:
      "MCU 모듈을 웹페이지와 연결하고 위치 정보를 기반으로 해당 모듈에서 센서 데이터가 수집되고 일정 시간마다 데이터가 정상적으로 갱신이 되는지 테스트하는 웹페이지이다. javascript를 이용해 서버를 구축의 경험과 Express.js와 미들웨어에 대해 이해하게 되었다. ",
    html_url: "https://github.com/cowboy9408/BJMCU-Node.js-",
    topics: ["JavaScript", "Node.js", "Express.js", "MongoDB"],
  },
  {
    name: "Project Xchat",
    description:
      "실시간 메신저 웹 애플리케이션이다. styled-component를 사용하고 있으며, 이 개발을 통해 코드 가독성과 유지보수성에 대해 많은 생각을 하게 되었다. 또 use 훅에 대해 좀더 깊이 있게 알게되었다.",
    html_url: "https://github.com/cowboy9408/Xchat-react.js-",
    topics: ["JavaScript", "React.js", "styled-component"],
  },
  {
    name: "LGInnotek Operation",
    description:
      "LG이노텍 공식 웹페이지이다. 전체적인 구축은 아니었지만 리뉴얼 및 신규 페이지 구축과 Hcaptcha 도입으로 웹사이트에 보안에 기여했습니다.",
    homepage: "https://www.lginnotek.com/support/qna.do",
    topics: ["JSP", "HTML", "Hcaptcha"],
  },
  {
    name: "OneGrove 관리자 CMS",
    description:
      "본 프로젝트에서는 CMS 관리자 페이지 구축과 전체 API 연동 작업을 전담하였습니다. 관리자 기능(UI 포함), 데이터 처리, 인증/인가 로직, 비동기 통신 처리 등 핵심 기능을 React 기반으로 구현하였으며, 퍼블리셔와의 협업을 통해 UI 디자인을 연동하였습니다.",
    homepage: "https://admin-dev.onegrove.kr/",
    html_url: "https://github.com/cowboy9408/Onegrove",
    topics: ["React.js"],
  },
  {
    name: "OneGroveMall",
    description:
      "본 프로젝트에서는 로그인 및 회원가입, 사용자 프로필 작업 , 해당 프로젝트 API 연동 작업을 전담하였습니다. 데이터 처리, 인증/인가 로직, 비동기 통신 처리 등 핵심 기능을 Next.js 기반으로 구현하였으며, 백엔드 및 디자이너와의 협업을 통해 연동 및 최적화 작업을 수행했습니다.",
    homepage: "https://front-dev.onegrove.kr/",
    html_url: "https://github.com/cowboy9408/onegrove-front",
    topics: ["Next.js"],
  },
];

const Projects = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
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
              <a
                className="highlight-link"
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
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
              <a
                className="highlight-link"
                href={repo.homepage}
                target="_blank"
                rel="noreferrer"
              >
                Demo
              </a>
            )}

            {repo.html_url && (
              <a
                className="highlight-link"
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            )}
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
