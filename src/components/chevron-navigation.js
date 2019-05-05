import React from 'react';
import { css, keyframes } from '@emotion/core';
import AnchorLink from 'react-anchor-link-smooth-scroll';


// const breakpoints = [475, 576, 768, 992, 1200];

// const mq = breakpoints.map(bp => `@media (min-width: ${bp}px`);

const bounce = keyframes`
  from { transform: translate3d(0, 0, 0);  }
  to   { transform: translate3d(0, 20px, 0); }
`;

export default props => {
  console.dir(props.targetElement);
  return (
    <div
      css={css`
        animation: ${bounce} 0.6s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        position: absolute;
        bottom: 50px;
        left: 0;
        right: 0;
      `}
    >
      <AnchorLink
        href={props.targetElement}
        offset="10"
        css={css`
          border-right: 5px solid #23a7d3;
          border-top: 5px solid #23a7d3;
          width: 50px;
          height: 50px;
          margin: 0 auto;
          bottom: 0;
          transform: rotate(135deg);
          display: block;
        `}
      />
    </div>
  );
};
