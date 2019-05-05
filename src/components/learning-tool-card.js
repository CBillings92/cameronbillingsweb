import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import SimpleListItem from './simple-list-item';

import { rhythm } from '../utils/typography';

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

export default props => {
  const coursesTakenHTML = props.coursesTaken.map(function(course) {
    return <SimpleListItem itemTitle={course.name} />;
  });

  return (
    <div
      css={css`
        margin: 10px;
      `}
    >
      <div
        css={css`
          padding-bottom: 10px;
          display: flex;
          align-items: center;
        `}
      >
        <img
          src={props.learningToolLogoURL}
          alt="learningToolLogo"
          css={css`
            margin: 0 10px;
            height: 75px;
          `}
        />
        <span
          css={css`
            font-weight: 600;
            font-size: 150%;
          `}
        >
          {props.learningToolName}
          {props.learningToolSubName && <br />}
          {props.learningToolSubName && (
            <span
              css={css`
                font-weight: 500;
              `}
            >
              {props.learningToolSubName}
            </span>
          )}
        </span>
      </div>
      <div>{coursesTakenHTML}</div>
    </div>
  );
};
