import React from 'react';
import { css, keyframes } from '@emotion/core';
import { Link } from 'gatsby';

import { rhythm } from '../utils/typography';

const breakpoints = [475, 576, 768, 992, 1200];

const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

export default props => {
  return (
    <div
      css={css`
        margin: 10px;
        width: 100%;
      `}
    >
      <div
        css={css`
          padding-bottom: 10px;
          display: flex;
          align-items: center;
        `}
      >
        <div
          className="companyLogoContainer"
          css={css`
            width: 40%;
            ${mq[0]} {
              width: auto;
              padding-right: 10px;
            }
            display: inline-block;
          `}
        >
          <img
            src={props.companyLogoURL}
            alt="companyLogo"
            css={css`
              height: 100px;
              margin: 0 10px;
            `}
          />
        </div>
        <div
          css={css`
            display: inline-block;
            max-width: 60%;
          `}
        >
          <div
            className="companyName"
            css={css`
              font-weight: bold;
              font-size: 150%;
            `}
          >
            {props.companyName}
          </div>
          <div
            className="title"
            css={{
              fontSize: '120%'
            }}
          >
            {props.title}
          </div>
          <div css={{ fontSize: '120%' }} className="timeline">
            {props.timeline}
          </div>
        </div>
      </div>
      <div css={{ fontSize: '120%' }} className="aboutWorkExperience">
        {props.description}
      </div>
    </div>
  );
};
