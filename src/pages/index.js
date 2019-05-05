/*eslint-disable no-script-url*/

import React from 'react';
import { css, keyframes } from '@emotion/core';
import SectionHeader from '../components/section-header';
import WorkExperienceCard from '../components/work-experience-card';
import LearningToolCard from '../components/learning-tool-card';
import wizioLogo from '../../static/images/favicon-194x194.png';
import cameronHeadShot from '../../static/images/headshots/headshot_v3.jpg';
import placesForLessLogo from '../../static/images/placesforless.png';
import SimpleListItem from '../components/simple-list-item';
import ChevronNavigation from '../components/chevron-navigation';

const breakpoints = [475, 576, 768, 992, 1200];

const popIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-4rem) scale(.8);
  }
  100% {
    opacity: 1;
    transform: none;
  }
`;

const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`);
export default ({ data }) => {
  const frontEndMasterCourses = [
    { name: 'Complete Intro to React, v3 (feat. Redux, Router & Flow)' },
    { name: 'CSS In-Depth, v2' },
    { name: 'SASS Fundamentals' },
    { name: 'Advanced State Management in React (feat. Redux & MobX)' },
    { name: 'Responsive Web Design' },
    { name: 'Webpack 4 Fundamentals' },
    { name: 'Serverless with AWS Lambda' },
    { name: 'Rapid Development on AWS: React, Node.JS, & GraphQL' },
    { name: 'Advanced Asynchronous JavaScript' },
    { name: 'Deep JavaScript Fundamentals' },
    { name: 'Rethinking Asynchronous JavaScript' },
    { name: 'CSS3 In-Depth' },
    { name: 'Four Semesters of Computer Science in 5 Hours' },
    { name: 'Functional-Lite JavaScript' },
    { name: 'API Design in Node.JS (using Express & Mongo' },
    { name: 'Advanced JavaScript' },
    { name: 'JavaScript: From Fundamentals to Functional JS' }
  ];
  const linuxAcademyCourses = [
    { name: 'AWS Essentials' },
    { name: 'DevOps Essentials' }
  ];
  const courseraCourses = [{ name: 'R Programming' }];

  const skillsList = [
    'HTML5',
    'CSS3',
    'SASS',
    'JavaScript (ES5, ES6)',
    'React',
    'AngularJS (Version 1)',
    'GatsbyJS',
    'Python',
    'ThreeJS',
    'MYSQL',
    'SQLServer',
    'SQL',
    'TSQL',
    'Data Warehousing',
    'Data Engineering',
    'Data Modeling',
    'MVC Pattern',
    'REST/RESTful APIs',
    'Object Oriented Design',
    'Agile Development',
    'JQuery',
    'Bootsrap 3',
    'CSS-in-JS',
    'NodeJS',
    'ExpressJS',
    'AWS EC2',
    'AWS Elastic Beanstalk',
    'AWS S3',
    'AWS Lambda',
    'AWS RDS',
    'AWS Route53',
    'AWS IAM',
    'AWS CloudFront',
    'R'
  ];

  const skillsListHTML = skillsList.map(function(skill) {
    return <SimpleListItem itemTitle={skill} />;
  });
  return (
    <div>
      <div
        css={css`
          ${'' /* background-image: url(${cameronPhoto});
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
          ${mq[4]} {
            height: 1000px;
          } */}
          background-color: #071013;
          min-height: 100vh;
          width:100%;
          display: flex;
          align-items: center;
          justify-content: space-around;
        `}
      >
        <div
          css={css`
            width: 50%;
            ${mq[1]} {
              width: 33%;
            }
          `}
        >
          <div
            css={css`
              width:100%;
              padding: 0 10px;
              animation: ${popIn} 0.6s cubic-bezier(0, 1.02, 0.7, 1.23) forwards;
            `}
          >
            <h1
              css={css`
                font-size: 300%;
                color: white;
                text-align: left;
              `}
            >
              Hi! I'm Cameron
            </h1>
          </div>
          <div
            css={css`
              width: 100%;
              padding: 0 10px;
              color: white;
              font-size: 150%;
              animation: ${popIn} 0.6s cubic-bezier(0, 1.02, 0.7, 1.23) forwards;
              opacity: 0;
              animation-delay: 0.6s;
            `}
          >
            <p>
              I'm a board gamer, developer, amateur chef, bread baker,
              entrepreneur and daily runner and cyclist. I enjoy long discussion
              about contentious topics, questioning the status quo, and helping
              others live their best life.
            </p>
          </div>
        </div>
          <div css={css`
            width:500px;
            opacity: 0;
            animation: ${popIn} 0.6s cubic-bezier(0, 1.02, 0.7, 1.23) forwards;
          `}>
            <img css={css`display: block`} src={cameronHeadShot} alt='headshot'>
            </img>
          </div>
          <div css={css`
            width:500px;
            opacity: 0;
            animation: ${popIn} 0.6s cubic-bezier(0, 1.02, 0.7, 1.23) forwards;
            animation-delay:1.2s;
            position: absolute;
            bottom: 20px;
          `}>
          <ChevronNavigation 
           targetElement="#professional-experience" />
          </div>
      </div>
      
        
      <div
        id="professional-experience"
        css={css`
          display: flex;
          align-items: center;
          flex-direction: column;
          padding-bottom: 70px;
          ${mq[1]} {
            padding: 20px 400px 20px 400px;
          }
          position: relative;
          min-height: 100vh;
        `}
      >
        <SectionHeader
          id="professional-experience"
          name="professional-experience"
          headerText="Professional Experience"
        />
        <WorkExperienceCard
          companyLogoURL={placesForLessLogo}
          title="CTO"
          companyName="Places For Less"
          timeline="Mar 2019 - Present"
          description="A tech enabled real estate rental brokerage that is building the best and least costly rental experience."
        />
        <WorkExperienceCard
          companyLogoURL={wizioLogo}
          title="CTO/Co-Founder"
          companyName="Wizio Inc."
          timeline="Sept 2015 - Jan 2019"
          description="A real estate tech company that's goal was to make the apartment rental process easier and more transparent by providing low cost on demand virtual reality tours in the Boston area. I was responsible for building and maintaining the technology behind the venture such as a scaleable production web application hosted using various AWS technologies. I was also responsible for buliding out the web based VR tour player (ThreeJS based), and other tooling associated with performing business operations at scale."
        />
        <WorkExperienceCard
          companyLogoURL="https://pbs.twimg.com/profile_images/1032276336394600451/AKgE1RI5_400x400.jpg"
          title="Data Engineer"
          companyName="DraftKings"
          timeline="June 2017 - September 2018"
          description="Worked closely with technical and non-technical teams across the organization to make sure they had the data and reporting they needed to succeed. Our team built and maintained a near real-time data warehouse ETL'd from production data and third party sources. We built highly performant, scaleable ETL utilizing TSQL, SQLServer, AWS DMS and Python and provided reporting functionality through Tableau and SSAS"
        />
        <WorkExperienceCard
          companyLogoURL="https://pbs.twimg.com/profile_images/998971357936336896/abbWSqTs_400x400.jpg"
          title="Business Intelligence & Application Developer"
          companyName="Boston Private"
          timeline="Sept 2015 - Jan 2019"
          description="Worked to provide business units across the organization with the data, reports and applications they needed to accomplish their goals. Tools and languages used were Fiserv's Hyperion, SSIS, TSQL, SQLServer, C#, .NET, HTML/CSS, WebForms, Bootstrap Framework"
        />
      </div>
      {/* <div
        id="lets-talk-tech"
        css={css`
          display: flex;
          align-items: center;
          flex-direction: column;
          ${mq[1]} {
            padding: 20px 400px 20px 400px;
          }
        `}
      >
        <SectionHeader headerText="Technical Skills" />
        <div
          css={css`
            display: flex;
            flex-wrap: wrap;
            align-items: center;
          `}
        >
          {skillsListHTML}
        </div>
      </div> */}
      {/* <div
        css={css`
          display: flex;
          flex-direction: column;
          padding-bottom: 75px;
          ${mq[1]} {
            padding: 20px 400px 20px 400px;
          }
        `}
      >
        <SectionHeader id="learningtools" headerText="Learning Resources" />
        <LearningToolCard
          learningToolLogoURL="https://pbs.twimg.com/profile_images/911069740164108289/ZiVAi6zG_400x400.jpg"
          learningToolName="FrontEnd Masters"
          coursesTaken={frontEndMasterCourses}
        />
        <LearningToolCard
          learningToolLogoURL="https://pbs.twimg.com/profile_images/948290681805553664/Vudf-DNI_400x400.jpg"
          learningToolName="Linux Academy"
          coursesTaken={linuxAcademyCourses}
        />
        <LearningToolCard
          learningToolLogoURL="https://pbs.twimg.com/profile_images/579039906804023296/RWDlntRx_400x400.jpeg"
          learningToolName="Coursera"
          coursesTaken={courseraCourses}
        />
        <LearningToolCard
          learningToolLogoURL="https://pbs.twimg.com/profile_images/692531829287567360/ytP7U362_400x400.png"
          learningToolName="FreeCodeCamp"
          coursesTaken={[]}
        />
        <LearningToolCard
          learningToolLogoURL="https://pbs.twimg.com/profile_images/877076407104356352/xPDfUHI1_400x400.jpg"
          learningToolName="CodeSignal (Code Fights)"
          coursesTaken={[]}
          learningToolSubName="Level 27"
        />
      </div> */}
    </div>
  );
};
