// Timeline.js
import React from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const timelineData = [
  {
    title: 'Started New Project',
    date: '2021-03',
    subtitle: 'Initiated a new project with a small team. Aiming to revolutionize the tech industry by creating a more intuitive UI/UX.',
    tags: ['JavaScript', 'React'],
    titleUrl: '#',
  },
  {
    title: 'Project Launch',
    date: '2021-08',
    subtitle: 'Successfully launched the project after months of hard work, featuring innovative features and seamless design.',
    tags: ['Launch', 'Success'],
    titleUrl: '#',
  },
  {
    title: 'First Milestone',
    date: '2022-02',
    subtitle: 'Reached 1,000 users in the first few months after launch. Gained valuable user feedback and insights.',
    tags: ['Milestone', 'Growth'],
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
      <SectionTitle>My Journey</SectionTitle>
      <SectionSubtitle>Explore the key milestones in my career</SectionSubtitle>
      <TimelineList>
        {timelineData.map((event, index) => (
          <TimelineItem key={index} side={index % 2 === 0 ? 'left' : 'right'}>
            <EventContent
              side={index % 2 === 0 ? 'left' : 'right'}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            >
              <EventTitle href={event.titleUrl} target="_blank" rel="noreferrer">
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
