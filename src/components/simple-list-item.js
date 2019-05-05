import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

import { rhythm } from '../utils/typography';

const breakpoints = [475, 576, 768, 992, 1200];

const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);
export default props => {
  return (
    <div
      css={css`
        padding: 3px;
        margin: 2px;
        ${'' /* position: relative; */}
        min-height: 45px;
        margin-top: 15px;
        position: relative;
        text-align: center;
        width: 100%;
        ${mq[0]} {
          width: 100%;
          display: block;
        }
        ${mq[1]} {
          width: 49%;
          display: inline-block;
        }
        &:after {
          content: '';
          background: black;
          display: block;
          margin: 0 auto;
          width: 70%;
          height: 1px;
          border: 1px solid #2d80c4;
          position: absolute;
          bottom: 0;
          right: 0;
          left: 0;
        }
      `}
    >
      <span
        css={css`
          margin: 0 auto;
          font-size: 150%;
        `}
      >
        {props.itemTitle}
      </span>
      <break
        css={css`
          flex-basis: 100%;
          width: 0px;
          height: 0px;
          overflow: hidden;
        `}
      />
    </div>
  );
};
