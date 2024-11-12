import React from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';


const timelineData = [
  {
    title: '국비 지원 교육을 시작으로....',
    date: '2022-05',
    subtitle: '어깨 너머로만 보던 IT 분야... 직접 공부하고 배우면서 꿈을 키우게됩니다.',
    tags: ['Turning Point'],
    titleUrl: '#',
  },
  {
    title: 'IT 개발자로써의 첫 커리어',
    date: '2022-11',
    subtitle: 'IT 개발자로서 첫 취직을 해 꿈을 향해 달려가 볼 수 있는 기회를 얻었습니다.',
    tags: ['First Career'],
    titleUrl: '#',
  },
  {
    title: 'IT 개발자로서의 첫 실무',
    date: '2023-01',
    subtitle: '본격 커리어의 시작! 처음으로 팀원들과 업무에 대해 회의를 진행하면서 협업을 진행해보았습니다. 이름하여 Xafe 프로젝트!',
    tags: ['Vue.js', 'First Project'],
    titleUrl: '#',
  },
  {
    title: '팀의 업무 효율에 지대한 기여를 하다.',
    date: '2024-03',
    subtitle: '저의 기획으로 탄생한 BJMCU 프로젝트! 모듈 테스트 간소화를 통해 팀 업무에 기여했습니다.',
    tags: ['Node.js','Express.js', 'Second Project'],
    titleUrl: '#',
  },
  {
    title: '한걸음 더 나아가다.',
    date: '2024-10',
    subtitle: '실시간 메신저 웹 애플리케이션을 개발을 진행하게 되면서 디자인도 맡아서 기획해 볼 수 있었고, React.js라는 언어와 저에 대해 보다 심층적으로 접근해 볼 수 있었습니다.',
    tags: ['React.js', 'Third Project'],
    titleUrl: '#',
  },
  // 추가 이벤트...
];

// 전체 타임라인 섹션 스타일
const TimelineWrapper = styled.div`
  padding: 40px 20px;
  position: relative;
  width: 100%;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5em;
  color: #e74c3c;
  margin-bottom: 0.5em;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.25em;
  color: #fff; /* text color */
  margin-bottom: 2em;
`;

const TimelineList = styled.ul`
  list-style: none;
  padding: 0;
  position: relative;
  margin: 0;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 4px;
    background: #e74c3c;
    transform: translateX(-50%);
  }
`;

const TimelineItem = styled.li`
  position: relative;
  width: 50%;
  padding: 20px;
  box-sizing: border-box;
  text-align: ${({ side }) => (side === 'left' ? 'right' : 'left')};
  left: ${({ side }) => (side === 'left' ? '0' : '50%')};
  transform: ${({ side }) => (side === 'left' ? 'translateX(-5%)' : 'translateX(5%)')};

  &::after {
    content: '';
    position: absolute;
    top: 20px;
    width: 10px;
    height: 10px;
    background: #e74c3c;
    border-radius: 50%;
    left: ${({ side }) => (side === 'left' ? 'calc(100% + 4px)' : '-14px')};
  }
`;

const EventContent = styled.div`
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

  &:hover {
    box-shadow: 
      8px 8px 16px rgba(0, 0, 0, 0.3),
      -8px -8px 16px rgba(255, 255, 255, 0.05),
      inset 4px 4px 6px rgba(0, 0, 0, 0.5),
      inset -4px -4px 6px rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(255, 255, 255, 0.1) 40%,
      rgba(255, 255, 255, 0) 70%
    );
    opacity: 0.6;
    pointer-events: none;
  }
`;

const EventTitle = styled.a`
  color: #fff; /* text color */
  position:relative;
  bottom:15px;
  font-size: 1.25em;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    color: #e74c3c; /* primary color */
  }
`;

const EventDate = styled.time`
  font-weight: bold;
  display: block;
  margin-bottom: 10px;
  color: #e74c3c;
  position:relative;
  bottom:11px;
`;

const EventDescription = styled.p`
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
  position:relative;
  bottom:11px;
`;

const Tag = styled.span`
  background: #555;
  position:relative;
  top:5px;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  margin-right: 5px;
  font-size: 0.875rem;
  box-shadow: inset -2px -2px 5px rgba(0, 0, 0, 0.5), inset 2px 2px 5px rgba(255, 255, 255, 0.2);
`;

const Timeline = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <TimelineWrapper>
      <SectionTitle>My IT Journey</SectionTitle>
      <SectionSubtitle>저의 발자취를 간략하게 보여드립니다!</SectionSubtitle>
      <TimelineList>
        {timelineData.map((event, index) => (
          <TimelineItem key={index} side={index % 2 === 0 ? 'left' : 'right'}>
            <EventContent
              side={index % 2 === 0 ? 'left' : 'right'}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            >
              <EventTitle  target="_blank" rel="noreferrer">
                {event.title}
              </EventTitle>
              <EventDate>{event.date}</EventDate>
              <EventDescription>{event.subtitle}</EventDescription>
              <div>
                {event.tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </div>
            </EventContent>
          </TimelineItem>
        ))}
      </TimelineList>
    </TimelineWrapper>
  );
};

export default Timeline;
