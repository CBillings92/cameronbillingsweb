import React from 'react';
import { css } from '@emotion/core';

// const breakpoints = [576, 768, 992, 1200];

// const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

export default props => (
  <div
    id={props.id}
    css={css`
      margin-top: 15px;
      padding: 20px 10px 10px 10px;
      font-size: 200%;
    `}
  >
    <h2
      css={css`
        color: #011627;
      `}
    >
      {props.headerText}
    </h2>
  </div>
);
